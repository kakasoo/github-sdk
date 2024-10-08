import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUsersOrgs } from "../../../structures/IApiUsersOrgs";
import { organization_minus_simple } from "../../../structures/organization_minus_simple";

/**
 * List organizations for a user.
 * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
 *
 * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.
 *
 * @tag orgs
 * @path users/:username/orgs
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
  export type Headers = IApiUsersOrgs.GetHeader;
  export type Output = organization_minus_simple[];

  export const METADATA = {
    method: "GET",
    path: "/users/:username/orgs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/users/${encodeURIComponent(username ?? "null")}/orgs`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): organization_minus_simple[] =>
    typia.random<organization_minus_simple[]>(g);
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
