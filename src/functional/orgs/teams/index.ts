import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsTeams } from "../../../structures/IApiOrgsTeams";
import { body } from "../../../structures/body";
import { team } from "../../../structures/team";
import { team_minus_full } from "../../../structures/team_minus_full";

export * as discussions from "./discussions";
export * as invitations from "./invitations";
export * as members from "./members";
export * as memberships from "./memberships";
export * as projects from "./projects";
export * as repos from "./repos";
export * as teams from "./teams";
/**
 * List teams.
 * Lists all teams in an organization that are visible to the authenticated user.
 *
 * @tag teams
 * @path orgs/:org/teams
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org)
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
          path: getByOrg.path(org),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsTeams.GetHeader;
  export type Output = team[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams`;
  export const random = (g?: Partial<typia.IRandomGenerator>): team[] =>
    typia.random<team[]>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
 * Create a team.
 * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/articles/setting-team-creation-permissions-in-your-organization)."
 *
 * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/about-teams)".
 *
 * @tag teams
 * @path orgs/:org/teams
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrg(
  connection: IConnection<postByOrg.Headers>,
  org: string,
  body: postByOrg.Input,
): Promise<postByOrg.Output> {
  return !!connection.simulate
    ? postByOrg.simulate(connection, org, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrg.METADATA,
          path: postByOrg.path(org),
          status: null,
        },
        body,
      );
}
export namespace postByOrg {
  export type Headers = IApiOrgsTeams.PostHeader;
  export type Input = body;
  export type Output = team_minus_full;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/teams",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_full => typia.random<team_minus_full>(g);
  export const simulate = (
    connection: IConnection<postByOrg.Headers>,
    org: string,
    body: postByOrg.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
 * Get a team by name.
 * Gets a team using the team's `slug`. To create the `slug`, GitHub replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slug(
  connection: IConnection<getByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
): Promise<getByOrgAndTeam_slug.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slug.simulate(connection, org, team_slug)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndTeam_slug.METADATA,
          path: getByOrgAndTeam_slug.path(org, team_slug),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeams.GetHeader;
  export type Output = team_minus_full;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_full => typia.random<team_minus_full>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slug.path(org, team_slug),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
 * Update a team.
 * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOrgAndTeam_slug(
  connection: IConnection<patchByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
  body: patchByOrgAndTeam_slug.Input,
): Promise<patchByOrgAndTeam_slug.Output> {
  return !!connection.simulate
    ? patchByOrgAndTeam_slug.simulate(connection, org, team_slug, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByOrgAndTeam_slug.METADATA,
          path: patchByOrgAndTeam_slug.path(org, team_slug),
          status: null,
        },
        body,
      );
}
export namespace patchByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeams.PatchHeader;
  export type Input = body;
  export type Output = team_minus_full;

  export const METADATA = {
    method: "PATCH",
    path: "/orgs/:org/teams/:team_slug",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_full => typia.random<team_minus_full>(g);
  export const simulate = (
    connection: IConnection<patchByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
    body: patchByOrgAndTeam_slug.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOrgAndTeam_slug.path(org, team_slug),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
 * Delete a team.
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 *
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndTeam_slug(
  connection: IConnection<eraseByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndTeam_slug.simulate(connection, org, team_slug)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndTeam_slug.METADATA,
          path: eraseByOrgAndTeam_slug.path(org, team_slug),
          status: null,
        },
      );
}
export namespace eraseByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeams.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/teams/:team_slug",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, team_slug: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndTeam_slug.path(org, team_slug),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
