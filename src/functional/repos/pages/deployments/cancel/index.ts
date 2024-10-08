import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposPagesDeploymentsCancel } from "../../../../../structures/IApiReposPagesDeploymentsCancel";

/**
 * Cancel a GitHub Pages deployment.
 * Cancels a GitHub Pages deployment.
 *
 * The authenticated user must have write permissions for the GitHub Pages site.
 *
 * @tag repos
 * @path repos/:owner/:repo/pages/deployments/:pages_deployment_id/cancel
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndPages_deployment_id(
  connection: IConnection<postByOwnerAndRepoAndPages_deployment_id.Headers>,
  owner: string,
  repo: string,
  pages_deployment_id: string,
): Promise<void> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndPages_deployment_id.simulate(
        connection,
        owner,
        repo,
        pages_deployment_id,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepoAndPages_deployment_id.METADATA,
          path: postByOwnerAndRepoAndPages_deployment_id.path(
            owner,
            repo,
            pages_deployment_id,
          ),
          status: null,
        },
      );
}
export namespace postByOwnerAndRepoAndPages_deployment_id {
  export type Headers = IApiReposPagesDeploymentsCancel.PostHeader;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/pages/deployments/:pages_deployment_id/cancel",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    pages_deployment_id: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pages/deployments/${encodeURIComponent(pages_deployment_id ?? "null")}/cancel`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndPages_deployment_id.Headers>,
    owner: string,
    repo: string,
    pages_deployment_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndPages_deployment_id.path(
        owner,
        repo,
        pages_deployment_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("pages_deployment_id")(() =>
        typia.assert(pages_deployment_id),
      );
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
