import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsTeamsMembers } from "../../../../structures/IApiOrgsTeamsMembers";
import { simple_minus_user } from "../../../../structures/simple_minus_user";

/**
 * List team members.
 * Team members will include the members of child teams.
 *
 * To list members in a team, the team must be visible to the authenticated user.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/members
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slug(
  connection: IConnection<getByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
  query: getByOrgAndTeam_slug.Query,
): Promise<getByOrgAndTeam_slug.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slug.simulate(connection, org, team_slug, query)
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
          path: getByOrgAndTeam_slug.path(org, team_slug, query),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeamsMembers.GetHeader;
  export type Query = IApiOrgsTeamsMembers.GetQuery;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug/members",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    team_slug: string,
    query: getByOrgAndTeam_slug.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/members`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_user[] => typia.random<simple_minus_user[]>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
    query: getByOrgAndTeam_slug.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slug.path(org, team_slug, query),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
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
