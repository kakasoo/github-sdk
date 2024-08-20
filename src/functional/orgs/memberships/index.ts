import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsMemberships } from "../../../structures/IApiOrgsMemberships";
import { body } from "../../../structures/body";
import { org_minus_membership } from "../../../structures/org_minus_membership";

/**
 * Get organization membership for a user.
 * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
 *
 * @tag orgs
 * @path orgs/:org/memberships/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndUsername(
  connection: IConnection<getByOrgAndUsername.Headers>,
  org: string,
  username: string,
): Promise<getByOrgAndUsername.Output> {
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
  export type Headers = IApiOrgsMemberships.GetHeader;
  export type Output = org_minus_membership;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/memberships/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): org_minus_membership => typia.random<org_minus_membership>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndUsername.Headers>,
    org: string,
    username: string,
  ): Output => {
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
 * Set organization membership for a user.
 * Only authenticated organization owners can add a member to the organization or update the member's role.
 *
 * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
 *
 * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
 *
 * **Rate limits**
 *
 * To prevent abuse, organization owners are limited to creating 50 organization invitations for an organization within a 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
 *
 * @tag orgs
 * @path orgs/:org/memberships/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndUsername(
  connection: IConnection<putByOrgAndUsername.Headers>,
  org: string,
  username: string,
  body: putByOrgAndUsername.Input,
): Promise<putByOrgAndUsername.Output> {
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
  export type Headers = IApiOrgsMemberships.PutHeader;
  export type Input = body;
  export type Output = org_minus_membership;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/memberships/:username",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): org_minus_membership => typia.random<org_minus_membership>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndUsername.Headers>,
    org: string,
    username: string,
    body: putByOrgAndUsername.Input,
  ): Output => {
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
 * Remove organization membership for a user.
 * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
 *
 * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
 *
 * @tag orgs
 * @path orgs/:org/memberships/:username
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
  export type Headers = IApiOrgsMemberships.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/memberships/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
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
