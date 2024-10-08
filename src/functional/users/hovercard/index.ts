import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUsersHovercard } from "../../../structures/IApiUsersHovercard";
import { hovercard } from "../../../structures/hovercard";

/**
 * Get contextual information for a user.
 * Provides hovercard information. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
 *
 * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository, you would use a `subject_type` value of `repository` and a `subject_id` value of `1300192` (the ID of the `Spoon-Knife` repository).
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag users
 * @path users/:username/hovercard
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
  export type Headers = IApiUsersHovercard.GetHeader;
  export type Query = IApiUsersHovercard.GetQuery;
  export type Output = hovercard;

  export const METADATA = {
    method: "GET",
    path: "/users/:username/hovercard",
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
    const location: string = `/users/${encodeURIComponent(username ?? "null")}/hovercard`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): hovercard =>
    typia.random<hovercard>(g);
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
