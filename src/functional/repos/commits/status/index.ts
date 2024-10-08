import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCommitsStatus } from "../../../../structures/IApiReposCommitsStatus";
import { combined_minus_commit_minus_status } from "../../../../structures/combined_minus_commit_minus_status";

/**
 * Get the combined status for a specific reference.
 * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
 *
 *
 * Additionally, a combined `state` is returned. The `state` is one of:
 *
 * *   **failure** if any of the contexts report as `error` or `failure`
 * *   **pending** if there are no statuses or a context is `pending`
 * *   **success** if the latest status for all contexts is `success`
 *
 * @tag repos
 * @path repos/:owner/:repo/commits/:ref/status
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRef(
  connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
  owner: string,
  repo: string,
  ref: string,
): Promise<getByOwnerAndRepoAndRef.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRef.simulate(connection, owner, repo, ref)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndRef.METADATA,
          path: getByOwnerAndRepoAndRef.path(owner, repo, ref),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRef {
  export type Headers = IApiReposCommitsStatus.GetHeader;
  export type Output = combined_minus_commit_minus_status;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/commits/:ref/status",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, ref: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(ref ?? "null")}/status`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): combined_minus_commit_minus_status =>
    typia.random<combined_minus_commit_minus_status>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
    owner: string,
    repo: string,
    ref: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRef.path(owner, repo, ref),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("ref")(() => typia.assert(ref));
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
