import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCommitsCheckSuites } from "../../../../structures/IApiReposCommitsCheckSuites";
import { response } from "../../../../structures/response";
/**
 * List check suites for a Git reference.
 * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name.
 *
 * > [!NOTE]
 * > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
 *
 * @tag checks
 * @path repos/:owner/:repo/commits/:ref/check-suites
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRef(
  connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
  owner: string,
  repo: string,
  ref: string,
  query: getByOwnerAndRepoAndRef.Query,
): Promise<getByOwnerAndRepoAndRef.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRef.simulate(connection, owner, repo, ref, query)
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
          path: getByOwnerAndRepoAndRef.path(owner, repo, ref, query),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRef {
  export type Headers = IApiReposCommitsCheckSuites.GetHeader;
  export type Query = IApiReposCommitsCheckSuites.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/commits/:ref/check-suites",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    ref: string,
    query: getByOwnerAndRepoAndRef.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(ref ?? "null")}/check-suites`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
    owner: string,
    repo: string,
    ref: string,
    query: getByOwnerAndRepoAndRef.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRef.path(owner, repo, ref, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("ref")(() => typia.assert(ref));
      assert.query(() => typia.assert(query));
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