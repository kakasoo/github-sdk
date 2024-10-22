import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsTeamsDiscussionsReactions } from "../../../../../structures/IApiOrgsTeamsDiscussionsReactions";
import { body } from "../../../../../structures/body";
import { reaction } from "../../../../../structures/reaction";

/**
 * List reactions for a team discussion.
 * List the reactions to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion).
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
 *
 * @tag reactions
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slugAndDiscussion_number(
  connection: IConnection<getByOrgAndTeam_slugAndDiscussion_number.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
  query: getByOrgAndTeam_slugAndDiscussion_number.Query,
): Promise<getByOrgAndTeam_slugAndDiscussion_number.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slugAndDiscussion_number.simulate(
        connection,
        org,
        team_slug,
        discussion_number,
        query,
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
            query,
          ),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slugAndDiscussion_number {
  export type Headers = IApiOrgsTeamsDiscussionsReactions.GetHeader;
  export type Query = IApiOrgsTeamsDiscussionsReactions.GetQuery;
  export type Output = reaction[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions",
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
    query: getByOrgAndTeam_slugAndDiscussion_number.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}/reactions`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction[] =>
    typia.random<reaction[]>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slugAndDiscussion_number.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
    query: getByOrgAndTeam_slugAndDiscussion_number.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slugAndDiscussion_number.path(
        org,
        team_slug,
        discussion_number,
        query,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.param("discussion_number")(() => typia.assert(discussion_number));
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
 * Create reaction for a team discussion.
 * Create a reaction to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion).
 *
 * A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
 *
 * > [!NOTE]
 * > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag reactions
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndTeam_slugAndDiscussion_number(
  connection: IConnection<postByOrgAndTeam_slugAndDiscussion_number.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
  body: postByOrgAndTeam_slugAndDiscussion_number.Input,
): Promise<postByOrgAndTeam_slugAndDiscussion_number.Output> {
  return !!connection.simulate
    ? postByOrgAndTeam_slugAndDiscussion_number.simulate(
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
          ...postByOrgAndTeam_slugAndDiscussion_number.METADATA,
          path: postByOrgAndTeam_slugAndDiscussion_number.path(
            org,
            team_slug,
            discussion_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace postByOrgAndTeam_slugAndDiscussion_number {
  export type Headers = IApiOrgsTeamsDiscussionsReactions.PostHeader;
  export type Input = body;
  export type Output = reaction;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}/reactions`;
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction =>
    typia.random<reaction>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndTeam_slugAndDiscussion_number.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
    body: postByOrgAndTeam_slugAndDiscussion_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndTeam_slugAndDiscussion_number.path(
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
 * Delete team discussion reaction.
 * > [!NOTE]
 * > You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
 *
 * Delete a reaction to a [team discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion).
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag reactions
 * @path orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id(
  connection: IConnection<eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.Headers>,
  org: string,
  team_slug: string,
  discussion_number: string,
  reaction_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.simulate(
        connection,
        org,
        team_slug,
        discussion_number,
        reaction_id,
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
          ...eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.METADATA,
          path: eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.path(
            org,
            team_slug,
            discussion_number,
            reaction_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id {
  export type Headers = IApiOrgsTeamsDiscussionsReactions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id",
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
    reaction_id: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/teams/${encodeURIComponent(team_slug ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}/reactions/${encodeURIComponent(reaction_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.Headers>,
    org: string,
    team_slug: string,
    discussion_number: string,
    reaction_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id.path(
        org,
        team_slug,
        discussion_number,
        reaction_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.param("discussion_number")(() => typia.assert(discussion_number));
      assert.param("reaction_id")(() => typia.assert(reaction_id));
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
