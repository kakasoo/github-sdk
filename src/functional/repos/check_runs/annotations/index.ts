import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCheckRunsAnnotations } from "../../../../structures/IApiReposCheckRunsAnnotations";
import { check_minus_annotation } from "../../../../structures/check_minus_annotation";

/**
 * List check run annotations.
 * Lists annotations for a check run using the annotation `id`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
 *
 * @tag checks
 * @path repos/:owner/:repo/check-runs/:check_run_id/annotations
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndCheck_run_id(
  connection: IConnection<getByOwnerAndRepoAndCheck_run_id.Headers>,
  owner: string,
  repo: string,
  check_run_id: string,
): Promise<getByOwnerAndRepoAndCheck_run_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndCheck_run_id.simulate(
        connection,
        owner,
        repo,
        check_run_id,
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
          ...getByOwnerAndRepoAndCheck_run_id.METADATA,
          path: getByOwnerAndRepoAndCheck_run_id.path(
            owner,
            repo,
            check_run_id,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndCheck_run_id {
  export type Headers = IApiReposCheckRunsAnnotations.GetHeader;
  export type Output = check_minus_annotation[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/check-runs/:check_run_id/annotations",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, check_run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/check-runs/${encodeURIComponent(check_run_id ?? "null")}/annotations`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): check_minus_annotation[] => typia.random<check_minus_annotation[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndCheck_run_id.Headers>,
    owner: string,
    repo: string,
    check_run_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndCheck_run_id.path(owner, repo, check_run_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("check_run_id")(() => typia.assert(check_run_id));
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
