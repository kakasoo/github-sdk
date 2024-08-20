import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposZipball } from "../../../structures/IApiReposZipball";
/**
 * Download a repository archive (zip).
 * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 *
 * > [!NOTE]
 * > For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.
 *
 * @tag repos
 * @path repos/:owner/:repo/zipball/:ref
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRef(
  connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
  owner: string,
  repo: string,
  ref: string,
): Promise<void> {
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
  export type Headers = IApiReposZipball.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/zipball/:ref",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, ref: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/zipball/${encodeURIComponent(ref ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRef.Headers>,
    owner: string,
    repo: string,
    ref: string,
  ): void => {
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
