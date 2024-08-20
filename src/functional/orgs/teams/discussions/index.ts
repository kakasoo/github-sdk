import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsTeamsDiscussions } from "../../../../structures/IApiOrgsTeamsDiscussions";
import { team_minus_discussion } from "../../../../structures/team_minus_discussion";
import { body } from "../../../../structures/body";
export * as comments from "./comments";
export * as reactions from "./reactions";
/**
 * List discussions.
 * List all discussions on a team's page.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/discussions
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
  export type Headers = IApiOrgsTeamsDiscussions.GetHeader;
  export type Query = IApiOrgsTeamsDiscussions.GetQuery;
  export type Output = team_minus_discussion[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug/discussions",
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
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion[] => typia.random<team_minus_discussion[]>(g);
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
/**
 * Create a discussion.
 * Creates a new discussion post on a team's page.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/discussions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndTeam_slug(
  connection: IConnection<postByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
  body: postByOrgAndTeam_slug.Input,
): Promise<postByOrgAndTeam_slug.Output> {
  return !!connection.simulate
    ? postByOrgAndTeam_slug.simulate(connection, org, team_slug, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrgAndTeam_slug.METADATA,
          path: postByOrgAndTeam_slug.path(org, team_slug),
          status: null,
        },
        body,
      );
}
export namespace postByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeamsDiscussions.PostHeader;
  export type Input = body;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/teams/:team_slug/discussions",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
    body: postByOrgAndTeam_slug.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndTeam_slug.path(org, team_slug),
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
 * Get a discussion.
 * Get a specific discussion on a team's page.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slugAndDiscussion_number(
  connection: IConnection<getByOrgAndTeam_slugAndDiscussion_number.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
): Promise<getByOrgAndTeam_slugAndDiscussion_number.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slugAndDiscussion_number.simulate(
        connection,
        org,
        team_slug,
        discussion_number,
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
          ...getByOrgAndTeam_slugAndDiscussion_number.METADATA,
          path: getByOrgAndTeam_slugAndDiscussion_number.path(
            org,
            team_slug,
            discussion_number,
          ),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slugAndDiscussion_number {
  export type Headers = IApiOrgsTeamsDiscussions.GetHeader;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    team_slug: string,
    discussion_number: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slugAndDiscussion_number.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slugAndDiscussion_number.path(
        org,
        team_slug,
        discussion_number,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.param("discussion_number")(() => typia.assert(discussion_number));
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
 * Update a discussion.
 * Edits the title and body text of a discussion post. Only the parameters you provide are updated.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOrgAndTeam_slugAndDiscussion_number(
  connection: IConnection<patchByOrgAndTeam_slugAndDiscussion_number.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
  body: patchByOrgAndTeam_slugAndDiscussion_number.Input,
): Promise<patchByOrgAndTeam_slugAndDiscussion_number.Output> {
  return !!connection.simulate
    ? patchByOrgAndTeam_slugAndDiscussion_number.simulate(
        connection,
        org,
        team_slug,
        discussion_number,
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
          ...patchByOrgAndTeam_slugAndDiscussion_number.METADATA,
          path: patchByOrgAndTeam_slugAndDiscussion_number.path(
            org,
            team_slug,
            discussion_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace patchByOrgAndTeam_slugAndDiscussion_number {
  export type Headers = IApiOrgsTeamsDiscussions.PatchHeader;
  export type Input = body;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "PATCH",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    team_slug: string,
    discussion_number: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<patchByOrgAndTeam_slugAndDiscussion_number.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
    body: patchByOrgAndTeam_slugAndDiscussion_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOrgAndTeam_slugAndDiscussion_number.path(
        org,
        team_slug,
        discussion_number,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.param("discussion_number")(() => typia.assert(discussion_number));
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
 * Delete a discussion from a team's page.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndTeam_slugAndDiscussion_number(
  connection: IConnection<eraseByOrgAndTeam_slugAndDiscussion_number.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndTeam_slugAndDiscussion_number.simulate(
        connection,
        org,
        team_slug,
        discussion_number,
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
          ...eraseByOrgAndTeam_slugAndDiscussion_number.METADATA,
          path: eraseByOrgAndTeam_slugAndDiscussion_number.path(
            org,
            team_slug,
            discussion_number,
          ),
          status: null,
        },
      );
}
export namespace eraseByOrgAndTeam_slugAndDiscussion_number {
  export type Headers = IApiOrgsTeamsDiscussions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    team_slug: string,
    discussion_number: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndTeam_slugAndDiscussion_number.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndTeam_slugAndDiscussion_number.path(
        org,
        team_slug,
        discussion_number,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.param("discussion_number")(() => typia.assert(discussion_number));
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