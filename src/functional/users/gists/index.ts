import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiUsersGists } from "../../../structures/IApiUsersGists";
import { base_minus_gist } from "../../../structures/base_minus_gist";
/**
 * List gists for a user.
 * Lists public gists for the specified user:
 *
 * @tag gists
 * @path users/:username/gists
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsername(
  connection: IConnection<getByUsername.Headers>,
  username: string,
): Promise<getByUsername.Output> {
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
  export type Headers = IApiUsersGists.GetHeader;
  export type Output = base_minus_gist[];

  export const METADATA = {
    method: "GET",
    path: "/users/:username/gists",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/users/${encodeURIComponent(username ?? "null")}/gists`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): base_minus_gist[] => typia.random<base_minus_gist[]>(g);
  export const simulate = (
    connection: IConnection<getByUsername.Headers>,
    username: string,
  ): Output => {
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
