import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiTeamsDiscussions } from "../../../structures/IApiTeamsDiscussions";
import { team_minus_discussion } from "../../../structures/team_minus_discussion";
import { body } from "../../../structures/body";
export * as comments from "./comments";
export * as reactions from "./reactions";
/**
 * List discussions (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/teams/discussions#list-discussions) endpoint.
 *
 * List all discussions on a team's page.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/discussions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByTeam_id(
  connection: IConnection<getByTeam_id.Headers>,
  team_id: string,
): Promise<getByTeam_id.Output> {
  return !!connection.simulate
    ? getByTeam_id.simulate(connection, team_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByTeam_id.METADATA,
          path: getByTeam_id.path(team_id),
          status: null,
        },
      );
}
export namespace getByTeam_id {
  export type Headers = IApiTeamsDiscussions.GetHeader;
  export type Output = team_minus_discussion[];

  export const METADATA = {
    method: "GET",
    path: "/teams/:team_id/discussions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/discussions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion[] => typia.random<team_minus_discussion[]>(g);
  export const simulate = (
    connection: IConnection<getByTeam_id.Headers>,
    team_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByTeam_id.path(team_id),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
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
 * Create a discussion (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/rest/teams/discussions#create-a-discussion) endpoint.
 *
 * Creates a new discussion post on a team's page.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/discussions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByTeam_id(
  connection: IConnection<postByTeam_id.Headers>,
  team_id: string,
  body: postByTeam_id.Input,
): Promise<postByTeam_id.Output> {
  return !!connection.simulate
    ? postByTeam_id.simulate(connection, team_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByTeam_id.METADATA,
          path: postByTeam_id.path(team_id),
          status: null,
        },
        body,
      );
}
export namespace postByTeam_id {
  export type Headers = IApiTeamsDiscussions.PostHeader;
  export type Input = body;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "POST",
    path: "/teams/:team_id/discussions",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/discussions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<postByTeam_id.Headers>,
    team_id: string,
    body: postByTeam_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByTeam_id.path(team_id),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
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
 * Get a discussion (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/teams/discussions#get-a-discussion) endpoint.
 *
 * Get a specific discussion on a team's page.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByTeam_idAndDiscussion_number(
  connection: IConnection<getByTeam_idAndDiscussion_number.Headers>,
  team_id: string,
  discussion_number: string,
): Promise<getByTeam_idAndDiscussion_number.Output> {
  return !!connection.simulate
    ? getByTeam_idAndDiscussion_number.simulate(
        connection,
        team_id,
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
          ...getByTeam_idAndDiscussion_number.METADATA,
          path: getByTeam_idAndDiscussion_number.path(
            team_id,
            discussion_number,
          ),
          status: null,
        },
      );
}
export namespace getByTeam_idAndDiscussion_number {
  export type Headers = IApiTeamsDiscussions.GetHeader;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "GET",
    path: "/teams/:team_id/discussions/:discussion_number",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, discussion_number: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<getByTeam_idAndDiscussion_number.Headers>,
    team_id: string,
    discussion_number: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByTeam_idAndDiscussion_number.path(team_id, discussion_number),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
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
 * Update a discussion (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/rest/teams/discussions#update-a-discussion) endpoint.
 *
 * Edits the title and body text of a discussion post. Only the parameters you provide are updated.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByTeam_idAndDiscussion_number(
  connection: IConnection<patchByTeam_idAndDiscussion_number.Headers>,
  team_id: string,
  discussion_number: string,
  body: patchByTeam_idAndDiscussion_number.Input,
): Promise<patchByTeam_idAndDiscussion_number.Output> {
  return !!connection.simulate
    ? patchByTeam_idAndDiscussion_number.simulate(
        connection,
        team_id,
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
          ...patchByTeam_idAndDiscussion_number.METADATA,
          path: patchByTeam_idAndDiscussion_number.path(
            team_id,
            discussion_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace patchByTeam_idAndDiscussion_number {
  export type Headers = IApiTeamsDiscussions.PatchHeader;
  export type Input = body;
  export type Output = team_minus_discussion;

  export const METADATA = {
    method: "PATCH",
    path: "/teams/:team_id/discussions/:discussion_number",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, discussion_number: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_discussion => typia.random<team_minus_discussion>(g);
  export const simulate = (
    connection: IConnection<patchByTeam_idAndDiscussion_number.Headers>,
    team_id: string,
    discussion_number: string,
    body: patchByTeam_idAndDiscussion_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByTeam_idAndDiscussion_number.path(team_id, discussion_number),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
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
 * Delete a discussion (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/rest/teams/discussions#delete-a-discussion) endpoint.
 *
 * Delete a discussion from a team's page.
 *
 * OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/discussions/:discussion_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByTeam_idAndDiscussion_number(
  connection: IConnection<eraseByTeam_idAndDiscussion_number.Headers>,
  team_id: string,
  discussion_number: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByTeam_idAndDiscussion_number.simulate(
        connection,
        team_id,
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
          ...eraseByTeam_idAndDiscussion_number.METADATA,
          path: eraseByTeam_idAndDiscussion_number.path(
            team_id,
            discussion_number,
          ),
          status: null,
        },
      );
}
export namespace eraseByTeam_idAndDiscussion_number {
  export type Headers = IApiTeamsDiscussions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/teams/:team_id/discussions/:discussion_number",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, discussion_number: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/discussions/${encodeURIComponent(discussion_number ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByTeam_idAndDiscussion_number.Headers>,
    team_id: string,
    discussion_number: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByTeam_idAndDiscussion_number.path(team_id, discussion_number),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
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
