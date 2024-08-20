import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposActionsCacheUsage } from "../../../../../structures/IApiReposActionsCacheUsage";
import { actions_minus_cache_minus_usage_minus_by_minus_repository } from "../../../../../structures/actions_minus_cache_minus_usage_minus_by_minus_repository";
/**
 * Get GitHub Actions cache usage for a repository.
 * Gets GitHub Actions cache usage for a repository.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/cache/usage
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo)
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
          path: getByOwnerAndRepo.path(owner, repo),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposActionsCacheUsage.GetHeader;
  export type Output =
    actions_minus_cache_minus_usage_minus_by_minus_repository;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/cache/usage",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/cache/usage`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): actions_minus_cache_minus_usage_minus_by_minus_repository =>
    typia.random<actions_minus_cache_minus_usage_minus_by_minus_repository>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
