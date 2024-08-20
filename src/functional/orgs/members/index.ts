import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsMembers } from "../../../structures/IApiOrgsMembers";
import { simple_minus_user } from "../../../structures/simple_minus_user";
export * as codespaces from "./codespaces";
export * as copilot from "./copilot";
/**
 * List organization members.
 * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
 *
 * @tag orgs
 * @path orgs/:org/members
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
  query: getByOrg.Query,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrg.METADATA,
          path: getByOrg.path(org, query),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsMembers.GetHeader;
  export type Query = IApiOrgsMembers.GetQuery;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/members",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, query: getByOrg.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/members`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_user[] => typia.random<simple_minus_user[]>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
    query: getByOrg.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org, query),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
/**
 * Check organization membership for a user.
 * Check if a user is, publicly or privately, a member of the organization.
 *
 * @tag orgs
 * @path orgs/:org/members/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndUsername(
  connection: IConnection<getByOrgAndUsername.Headers>,
  org: string,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? getByOrgAndUsername.simulate(connection, org, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndUsername.METADATA,
          path: getByOrgAndUsername.path(org, username),
          status: null,
        },
      );
}
export namespace getByOrgAndUsername {
  export type Headers = IApiOrgsMembers.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/members/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/members/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndUsername.Headers>,
    org: string,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndUsername.path(org, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
 * Remove an organization member.
 * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
 *
 * @tag orgs
 * @path orgs/:org/members/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndUsername(
  connection: IConnection<eraseByOrgAndUsername.Headers>,
  org: string,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndUsername.simulate(connection, org, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndUsername.METADATA,
          path: eraseByOrgAndUsername.path(org, username),
          status: null,
        },
      );
}
export namespace eraseByOrgAndUsername {
  export type Headers = IApiOrgsMembers.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/members/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/members/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndUsername.Headers>,
    org: string,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndUsername.path(org, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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