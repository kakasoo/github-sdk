import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsTeamsMemberships } from "../../../../structures/IApiOrgsTeamsMemberships";
import { body } from "../../../../structures/body";
import { team_minus_membership } from "../../../../structures/team_minus_membership";

/**
 * Get team membership for a user.
 * Team members will include the members of child teams.
 *
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 *
 * > [!NOTE]
 * > The response contains the `state` of the membership and the member's `role`.
 *
 * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/memberships/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slugAndUsername(
  connection: IConnection<getByOrgAndTeam_slugAndUsername.Headers>,
  org: string,
  team_slug: string,
  username: string,
): Promise<getByOrgAndTeam_slugAndUsername.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slugAndUsername.simulate(
        connection,
        org,
        team_slug,
        username,
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
          ...getByOrgAndTeam_slugAndUsername.METADATA,
          path: getByOrgAndTeam_slugAndUsername.path(org, team_slug, username),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slugAndUsername {
  export type Headers = IApiOrgsTeamsMemberships.GetHeader;
  export type Output = team_minus_membership;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug/memberships/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_membership => typia.random<team_minus_membership>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slugAndUsername.Headers>,
    org: string,
    team_slug: string,
    username: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slugAndUsername.path(org, team_slug, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
 * Add or update team membership for a user.
 * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * > [!NOTE]
 * > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
 *
 * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/memberships/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndTeam_slugAndUsername(
  connection: IConnection<putByOrgAndTeam_slugAndUsername.Headers>,
  org: string,
  team_slug: string,
  username: string,
  body: putByOrgAndTeam_slugAndUsername.Input,
): Promise<putByOrgAndTeam_slugAndUsername.Output> {
  return !!connection.simulate
    ? putByOrgAndTeam_slugAndUsername.simulate(
        connection,
        org,
        team_slug,
        username,
        body,
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
          ...putByOrgAndTeam_slugAndUsername.METADATA,
          path: putByOrgAndTeam_slugAndUsername.path(org, team_slug, username),
          status: null,
        },
        body,
      );
}
export namespace putByOrgAndTeam_slugAndUsername {
  export type Headers = IApiOrgsTeamsMemberships.PutHeader;
  export type Input = body;
  export type Output = team_minus_membership;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/teams/:team_slug/memberships/:username",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_membership => typia.random<team_minus_membership>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndTeam_slugAndUsername.Headers>,
    org: string,
    team_slug: string,
    username: string,
    body: putByOrgAndTeam_slugAndUsername.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndTeam_slugAndUsername.path(org, team_slug, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
 * Remove team membership for a user.
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * > [!NOTE]
 * > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/memberships/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndTeam_slugAndUsername(
  connection: IConnection<eraseByOrgAndTeam_slugAndUsername.Headers>,
  org: string,
  team_slug: string,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndTeam_slugAndUsername.simulate(
        connection,
        org,
        team_slug,
        username,
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
          ...eraseByOrgAndTeam_slugAndUsername.METADATA,
          path: eraseByOrgAndTeam_slugAndUsername.path(
            org,
            team_slug,
            username,
          ),
          status: null,
        },
      );
}
export namespace eraseByOrgAndTeam_slugAndUsername {
  export type Headers = IApiOrgsTeamsMemberships.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/teams/:team_slug/memberships/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/memberships/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndTeam_slugAndUsername.Headers>,
    org: string,
    team_slug: string,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndTeam_slugAndUsername.path(org, team_slug, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
