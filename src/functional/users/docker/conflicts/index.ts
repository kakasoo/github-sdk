import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUsersDockerConflicts } from "../../../../structures/IApiUsersDockerConflicts";
import { packages } from "../../../../structures/package";

/**
 * Get list of conflicting packages during Docker migration for user.
 * Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.
 *
 * @tag packages
 * @path users/:username/docker/conflicts
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
  export type Headers = IApiUsersDockerConflicts.GetHeader;
  export type Output = packages[];

  export const METADATA = {
    method: "GET",
    path: "/users/:username/docker/conflicts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/users/${encodeURIComponent(username ?? "null")}/docker/conflicts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): packages[] =>
    typia.random<packages[]>(g);
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
