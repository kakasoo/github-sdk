import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposContributors } from "../../../structures/IApiReposContributors";
import { contributor } from "../../../structures/contributor";
/**
 * List repository contributors.
 * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.
 *
 * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
 *
 * @tag repos
 * @path repos/:owner/:repo/contributors
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  query: getByOwnerAndRepo.Query,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepo.METADATA,
          path: getByOwnerAndRepo.path(owner, repo, query),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposContributors.GetHeader;
  export type Query = IApiReposContributors.GetQuery;
  export type Output = contributor[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/contributors",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/contributors`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): contributor[] =>
    typia.random<contributor[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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