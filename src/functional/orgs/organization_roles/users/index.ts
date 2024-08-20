import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsOrganizationRolesUsers } from "../../../../structures/IApiOrgsOrganizationRolesUsers";
import { user_minus_role_minus_assignment } from "../../../../structures/user_minus_role_minus_assignment";
/**
 * Remove all organization roles for a user.
 * Revokes all assigned organization roles from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."
 *
 * The authenticated user must be an administrator for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag orgs
 * @path orgs/:org/organization-roles/users/:username
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
  export type Headers = IApiOrgsOrganizationRolesUsers.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/organization-roles/users/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/organization-roles/users/${encodeURIComponent(username ?? "null")}`;
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
/**
 * Assign an organization role to a user.
 * Assigns an organization role to a member of an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."
 *
 * The authenticated user must be an administrator for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag orgs
 * @path orgs/:org/organization-roles/users/:username/:role_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndUsernameAndRole_id(
  connection: IConnection<putByOrgAndUsernameAndRole_id.Headers>,
  org: string,
  username: string,
  role_id: string,
): Promise<void> {
  return !!connection.simulate
    ? putByOrgAndUsernameAndRole_id.simulate(connection, org, username, role_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrgAndUsernameAndRole_id.METADATA,
          path: putByOrgAndUsernameAndRole_id.path(org, username, role_id),
          status: null,
        },
      );
}
export namespace putByOrgAndUsernameAndRole_id {
  export type Headers = IApiOrgsOrganizationRolesUsers.PutHeader;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/organization-roles/users/:username/:role_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string, role_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/organization-roles/users/${encodeURIComponent(username ?? "null")}/${encodeURIComponent(role_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndUsernameAndRole_id.Headers>,
    org: string,
    username: string,
    role_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndUsernameAndRole_id.path(org, username, role_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("username")(() => typia.assert(username));
      assert.param("role_id")(() => typia.assert(role_id));
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
 * Remove an organization role from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."
 *
 * The authenticated user must be an administrator for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag orgs
 * @path orgs/:org/organization-roles/users/:username/:role_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndUsernameAndRole_id(
  connection: IConnection<eraseByOrgAndUsernameAndRole_id.Headers>,
  org: string,
  username: string,
  role_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndUsernameAndRole_id.simulate(
        connection,
        org,
        username,
        role_id,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndUsernameAndRole_id.METADATA,
          path: eraseByOrgAndUsernameAndRole_id.path(org, username, role_id),
          status: null,
        },
      );
}
export namespace eraseByOrgAndUsernameAndRole_id {
  export type Headers = IApiOrgsOrganizationRolesUsers.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/organization-roles/users/:username/:role_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string, role_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/organization-roles/users/${encodeURIComponent(username ?? "null")}/${encodeURIComponent(role_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndUsernameAndRole_id.Headers>,
    org: string,
    username: string,
    role_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndUsernameAndRole_id.path(org, username, role_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("username")(() => typia.assert(username));
      assert.param("role_id")(() => typia.assert(role_id));
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
 * List users that are assigned to an organization role.
 * Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."
 *
 * To use this endpoint, you must be an administrator for the organization.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag orgs
 * @path orgs/:org/organization-roles/:role_id/users
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndRole_id(
  connection: IConnection<getByOrgAndRole_id.Headers>,
  org: string,
  role_id: string,
): Promise<getByOrgAndRole_id.Output> {
  return !!connection.simulate
    ? getByOrgAndRole_id.simulate(connection, org, role_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndRole_id.METADATA,
          path: getByOrgAndRole_id.path(org, role_id),
          status: null,
        },
      );
}
export namespace getByOrgAndRole_id {
  export type Headers = IApiOrgsOrganizationRolesUsers.GetHeader;
  export type Output = user_minus_role_minus_assignment[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/organization-roles/:role_id/users",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, role_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/organization-roles/${encodeURIComponent(role_id ?? "null")}/users`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): user_minus_role_minus_assignment[] =>
    typia.random<user_minus_role_minus_assignment[]>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndRole_id.Headers>,
    org: string,
    role_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndRole_id.path(org, role_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("role_id")(() => typia.assert(role_id));
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
