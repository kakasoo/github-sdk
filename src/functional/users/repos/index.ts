import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUsersRepos } from "../../../structures/IApiUsersRepos";
import { minimal_minus_repository } from "../../../structures/minimal_minus_repository";

/**
 * List repositories for a user.
 * Lists public repositories for the specified user.
 *
 * @tag repos
 * @path users/:username/repos
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsername(
  connection: IConnection<getByUsername.Headers>,
  username: string,
  query: getByUsername.Query,
): Promise<getByUsername.Output> {
  return !!connection.simulate
    ? getByUsername.simulate(connection, username, query)
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
          path: getByUsername.path(username, query),
          status: null,
        },
      );
}
export namespace getByUsername {
  export type Headers = IApiUsersRepos.GetHeader;
  export type Query = IApiUsersRepos.GetQuery;
  export type Output = minimal_minus_repository[];

  export const METADATA = {
    method: "GET",
    path: "/users/:username/repos",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string, query: getByUsername.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/users/${encodeURIComponent(username ?? "null")}/repos`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): minimal_minus_repository[] => typia.random<minimal_minus_repository[]>(g);
  export const simulate = (
    connection: IConnection<getByUsername.Headers>,
    username: string,
    query: getByUsername.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByUsername.path(username, query),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
