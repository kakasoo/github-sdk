import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCommitsStatuses } from "../../../../structures/IApiReposCommitsStatuses";
import { status } from "../../../../structures/status";
/**
 * List commit statuses for a reference.
 * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
 *
 * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
 *
 * @tag repos
 * @path repos/:owner/:repo/commits/:ref/statuses
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
  export type Headers = IApiReposCommitsStatuses.GetHeader;
  export type Output = status[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/commits/:ref/statuses",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, ref: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(ref ?? "null")}/statuses`;
  export const random = (g?: Partial<typia.IRandomGenerator>): status[] =>
    typia.random<status[]>(g);
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
