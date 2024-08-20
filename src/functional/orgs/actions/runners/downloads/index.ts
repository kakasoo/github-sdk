import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsActionsRunnersDownloads } from "../../../../../structures/IApiOrgsActionsRunnersDownloads";
import { runner_minus_application } from "../../../../../structures/runner_minus_application";

/**
 * List runner applications for an organization.
 * Lists binaries for the runner application that you can download and run.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.  If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/downloads
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrg.METADATA,
          path: getByOrg.path(org),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsActionsRunnersDownloads.GetHeader;
  export type Output = runner_minus_application[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/actions/runners/downloads",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/downloads`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): runner_minus_application[] => typia.random<runner_minus_application[]>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
