import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiGists } from "../../structures/IApiGists";
import { base_minus_gist } from "../../structures/base_minus_gist";
import { body } from "../../structures/body";
import { gist_minus_simple } from "../../structures/gist_minus_simple";
export * as public from "./public";
export * as starred from "./starred";
export * as comments from "./comments";
export * as commits from "./commits";
export * as forks from "./forks";
export * as star from "./star";
/**
 * List gists for the authenticated user.
 * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
 *
 * @tag gists
 * @path gists
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiGists.GetHeader;
  export type Output = base_minus_gist[];

  export const METADATA = {
    method: "GET",
    path: "/gists",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/gists";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): base_minus_gist[] => typia.random<base_minus_gist[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * Create a gist.
 * Allows you to add a new gist with one or more files.
 *
 * > [!NOTE]
 * > Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
 *
 * @tag gists
 * @path gists
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function post(
  connection: IConnection,
  body: post.Input,
): Promise<post.Output> {
  return !!connection.simulate
    ? post.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...post.METADATA,
          path: post.path(),
          status: null,
        },
        body,
      );
}
export namespace post {
  export type Input = body;
  export type Output = gist_minus_simple;

  export const METADATA = {
    method: "POST",
    path: "/gists",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/gists";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): gist_minus_simple => typia.random<gist_minus_simple>(g);
  export const simulate = (
    connection: IConnection,
    body: post.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: post.path(),
      contentType: "application/json",
    });
    try {
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
 * Get a gist.
 * Gets a specified gist.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
 *
 * @tag gists
 * @path gists/:gist_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByGist_id(
  connection: IConnection<getByGist_id.Headers>,
  gist_id: string,
): Promise<getByGist_id.Output> {
  return !!connection.simulate
    ? getByGist_id.simulate(connection, gist_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByGist_id.METADATA,
          path: getByGist_id.path(gist_id),
          status: null,
        },
      );
}
export namespace getByGist_id {
  export type Headers = IApiGists.GetHeader;
  export type Output = gist_minus_simple;

  export const METADATA = {
    method: "GET",
    path: "/gists/:gist_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (gist_id: string) =>
    `/gists/${encodeURIComponent(gist_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): gist_minus_simple => typia.random<gist_minus_simple>(g);
  export const simulate = (
    connection: IConnection<getByGist_id.Headers>,
    gist_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByGist_id.path(gist_id),
      contentType: "application/json",
    });
    try {
      assert.param("gist_id")(() => typia.assert(gist_id));
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
 * Update a gist.
 * Allows you to update a gist's description and to update, delete, or rename gist files. Files
 * from the previous version of the gist that aren't explicitly changed during an edit
 * are unchanged.
 *
 * At least one of `description` or `files` is required.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
 *
 * @tag gists
 * @path gists/:gist_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByGist_id(
  connection: IConnection<patchByGist_id.Headers>,
  gist_id: string,
  body: patchByGist_id.Input,
): Promise<patchByGist_id.Output> {
  return !!connection.simulate
    ? patchByGist_id.simulate(connection, gist_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByGist_id.METADATA,
          path: patchByGist_id.path(gist_id),
          status: null,
        },
        body,
      );
}
export namespace patchByGist_id {
  export type Headers = IApiGists.PatchHeader;
  export type Input = body;
  export type Output = gist_minus_simple;

  export const METADATA = {
    method: "PATCH",
    path: "/gists/:gist_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (gist_id: string) =>
    `/gists/${encodeURIComponent(gist_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): gist_minus_simple => typia.random<gist_minus_simple>(g);
  export const simulate = (
    connection: IConnection<patchByGist_id.Headers>,
    gist_id: string,
    body: patchByGist_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByGist_id.path(gist_id),
      contentType: "application/json",
    });
    try {
      assert.param("gist_id")(() => typia.assert(gist_id));
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
 * @tag gists
 * @path gists/:gist_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByGist_id(
  connection: IConnection<eraseByGist_id.Headers>,
  gist_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByGist_id.simulate(connection, gist_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByGist_id.METADATA,
          path: eraseByGist_id.path(gist_id),
          status: null,
        },
      );
}
export namespace eraseByGist_id {
  export type Headers = IApiGists.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/gists/:gist_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (gist_id: string) =>
    `/gists/${encodeURIComponent(gist_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByGist_id.Headers>,
    gist_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByGist_id.path(gist_id),
      contentType: "application/json",
    });
    try {
      assert.param("gist_id")(() => typia.assert(gist_id));
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
 * Get a gist revision.
 * Gets a specified gist revision.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
 *
 * @tag gists
 * @path gists/:gist_id/:sha
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByGist_idAndSha(
  connection: IConnection<getByGist_idAndSha.Headers>,
  gist_id: string,
  sha: string,
): Promise<getByGist_idAndSha.Output> {
  return !!connection.simulate
    ? getByGist_idAndSha.simulate(connection, gist_id, sha)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByGist_idAndSha.METADATA,
          path: getByGist_idAndSha.path(gist_id, sha),
          status: null,
        },
      );
}
export namespace getByGist_idAndSha {
  export type Headers = IApiGists.GetHeader;
  export type Output = gist_minus_simple;

  export const METADATA = {
    method: "GET",
    path: "/gists/:gist_id/:sha",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (gist_id: string, sha: string) =>
    `/gists/${encodeURIComponent(gist_id ?? "null")}/${encodeURIComponent(sha ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): gist_minus_simple => typia.random<gist_minus_simple>(g);
  export const simulate = (
    connection: IConnection<getByGist_idAndSha.Headers>,
    gist_id: string,
    sha: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByGist_idAndSha.path(gist_id, sha),
      contentType: "application/json",
    });
    try {
      assert.param("gist_id")(() => typia.assert(gist_id));
      assert.param("sha")(() => typia.assert(sha));
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
