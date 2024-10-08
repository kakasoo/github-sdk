import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposReleasesTags } from "../../../../structures/IApiReposReleasesTags";
import { release } from "../../../../structures/release";

/**
 * Get a release by tag name.
 * Get a published release with the specified tag.
 *
 * @param tag tag parameter
 * @tag repos
 * @path repos/:owner/:repo/releases/tags/:tag
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndTag(
  connection: IConnection<getByOwnerAndRepoAndTag.Headers>,
  owner: string,
  repo: string,
  tag: string,
): Promise<getByOwnerAndRepoAndTag.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndTag.simulate(connection, owner, repo, tag)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndTag.METADATA,
          path: getByOwnerAndRepoAndTag.path(owner, repo, tag),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndTag {
  export type Headers = IApiReposReleasesTags.GetHeader;
  export type Output = release;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/releases/tags/:tag",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, tag: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/tags/${encodeURIComponent(tag ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): release =>
    typia.random<release>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndTag.Headers>,
    owner: string,
    repo: string,
    tag: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndTag.path(owner, repo, tag),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("tag")(() => typia.assert(tag));
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
