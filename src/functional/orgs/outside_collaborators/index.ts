import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsOutsideCollaborators } from "../../../structures/IApiOrgsOutsideCollaborators";
import { body } from "../../../structures/body";
import { simple_minus_user } from "../../../structures/simple_minus_user";

/**
 * List outside collaborators for an organization.
 * List all users who are outside collaborators of an organization.
 *
 * @tag orgs
 * @path orgs/:org/outside_collaborators
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
  export type Headers = IApiOrgsOutsideCollaborators.GetHeader;
  export type Query = IApiOrgsOutsideCollaborators.GetQuery;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/outside_collaborators",
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
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/outside_collaborators`;
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
 * Convert an organization member to outside collaborator.
 * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
 *
 * @tag orgs
 * @path orgs/:org/outside_collaborators/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndUsername(
  connection: IConnection<putByOrgAndUsername.Headers>,
  org: string,
  username: string,
  body: putByOrgAndUsername.Input,
): Promise<void> {
  return !!connection.simulate
    ? putByOrgAndUsername.simulate(connection, org, username, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrgAndUsername.METADATA,
          path: putByOrgAndUsername.path(org, username),
          status: null,
        },
        body,
      );
}
export namespace putByOrgAndUsername {
  export type Headers = IApiOrgsOutsideCollaborators.PutHeader;
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/outside_collaborators/:username",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/outside_collaborators/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndUsername.Headers>,
    org: string,
    username: string,
    body: putByOrgAndUsername.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndUsername.path(org, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("username")(() => typia.assert(username));
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
 * Remove outside collaborator from an organization.
 * Removing a user from this list will remove them from all the organization's repositories.
 *
 * @tag orgs
 * @path orgs/:org/outside_collaborators/:username
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
  export type Headers = IApiOrgsOutsideCollaborators.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/outside_collaborators/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/outside_collaborators/${encodeURIComponent(username ?? "null")}`;
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
