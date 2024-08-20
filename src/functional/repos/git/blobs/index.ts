import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposGitBlobs } from "../../../../structures/IApiReposGitBlobs";
import { blob } from "../../../../structures/blob";
import { body } from "../../../../structures/body";
import { short_minus_blob } from "../../../../structures/short_minus_blob";

/**
 * @tag git
 * @path repos/:owner/:repo/git/blobs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<postByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepo.METADATA,
          path: postByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepo {
  export type Headers = IApiReposGitBlobs.PostHeader;
  export type Input = body;
  export type Output = short_minus_blob;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/git/blobs",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/git/blobs`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): short_minus_blob => typia.random<short_minus_blob>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.body(() => typia.assert(body));
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
/**
 * Get a blob.
 * The `content` in the response will always be Base64 encoded.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github.raw+json`**: Returns the raw blob data.
 * - **`application/vnd.github+json`**: Returns a JSON representation of the blob with `content` as a base64 encoded string. This is the default if no media type is specified.
 *
 * **Note** This endpoint supports blobs up to 100 megabytes in size.
 *
 * @tag git
 * @path repos/:owner/:repo/git/blobs/:file_sha
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndFile_sha(
  connection: IConnection<getByOwnerAndRepoAndFile_sha.Headers>,
  owner: string,
  repo: string,
  file_sha: string,
): Promise<getByOwnerAndRepoAndFile_sha.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndFile_sha.simulate(connection, owner, repo, file_sha)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndFile_sha.METADATA,
          path: getByOwnerAndRepoAndFile_sha.path(owner, repo, file_sha),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndFile_sha {
  export type Headers = IApiReposGitBlobs.GetHeader;
  export type Output = blob;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/git/blobs/:file_sha",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, file_sha: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/git/blobs/${encodeURIComponent(file_sha ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): blob =>
    typia.random<blob>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndFile_sha.Headers>,
    owner: string,
    repo: string,
    file_sha: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndFile_sha.path(owner, repo, file_sha),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("file_sha")(() => typia.assert(file_sha));
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
