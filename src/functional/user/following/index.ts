import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiUserFollowing } from "../../../structures/IApiUserFollowing";
import { simple_minus_user } from "../../../structures/simple_minus_user";
/**
 * List the people the authenticated user follows.
 * Lists the people who the authenticated user follows.
 *
 * @tag users
 * @path user/following
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
  export type Headers = IApiUserFollowing.GetHeader;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/user/following",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/following";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_user[] => typia.random<simple_minus_user[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * @tag users
 * @path user/following/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsername(
  connection: IConnection<getByUsername.Headers>,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? getByUsername.simulate(connection, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByUsername.METADATA,
          path: getByUsername.path(username),
          status: null,
        },
      );
}
export namespace getByUsername {
  export type Headers = IApiUserFollowing.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/user/following/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/user/following/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByUsername.Headers>,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByUsername.path(username),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
 * Follow a user.
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.
 *
 * @tag users
 * @path user/following/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByUsername(
  connection: IConnection<putByUsername.Headers>,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? putByUsername.simulate(connection, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByUsername.METADATA,
          path: putByUsername.path(username),
          status: null,
        },
      );
}
export namespace putByUsername {
  export type Headers = IApiUserFollowing.PutHeader;

  export const METADATA = {
    method: "PUT",
    path: "/user/following/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/user/following/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByUsername.Headers>,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByUsername.path(username),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
 * Unfollow a user.
 * OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.
 *
 * @tag users
 * @path user/following/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByUsername(
  connection: IConnection<eraseByUsername.Headers>,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByUsername.simulate(connection, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByUsername.METADATA,
          path: eraseByUsername.path(username),
          status: null,
        },
      );
}
export namespace eraseByUsername {
  export type Headers = IApiUserFollowing.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/user/following/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/user/following/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByUsername.Headers>,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByUsername.path(username),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
