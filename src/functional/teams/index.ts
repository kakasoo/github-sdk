import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiTeams } from "../../structures/IApiTeams";
import { team_minus_full } from "../../structures/team_minus_full";
import { body } from "../../structures/body";
export * as discussions from "./discussions";
export * as invitations from "./invitations";
export * as members from "./members";
export * as memberships from "./memberships";
export * as projects from "./projects";
export * as repos from "./repos";
export * as teams from "./teams";
/**
 * Get a team (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/teams/teams#get-a-team-by-name) endpoint.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id
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
  export type Headers = IApiTeams.GetHeader;
  export type Output = team_minus_full;

  export const METADATA = {
    method: "GET",
    path: "/teams/:team_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_full => typia.random<team_minus_full>(g);
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
 * Update a team (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/teams/teams#update-a-team) endpoint.
 *
 * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 *
 * > [!NOTE]
 * > With nested teams, the `privacy` for parent teams cannot be `secret`.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByTeam_id(
  connection: IConnection<patchByTeam_id.Headers>,
  team_id: string,
  body: patchByTeam_id.Input,
): Promise<patchByTeam_id.Output> {
  return !!connection.simulate
    ? patchByTeam_id.simulate(connection, team_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByTeam_id.METADATA,
          path: patchByTeam_id.path(team_id),
          status: null,
        },
        body,
      );
}
export namespace patchByTeam_id {
  export type Headers = IApiTeams.PatchHeader;
  export type Input = body;
  export type Output = team_minus_full;

  export const METADATA = {
    method: "PATCH",
    path: "/teams/:team_id",
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
    `/teams/${encodeURIComponent(team_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_full => typia.random<team_minus_full>(g);
  export const simulate = (
    connection: IConnection<patchByTeam_id.Headers>,
    team_id: string,
    body: patchByTeam_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByTeam_id.path(team_id),
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
 * Delete a team (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/teams/teams#delete-a-team) endpoint.
 *
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 *
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByTeam_id(
  connection: IConnection<eraseByTeam_id.Headers>,
  team_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByTeam_id.simulate(connection, team_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByTeam_id.METADATA,
          path: eraseByTeam_id.path(team_id),
          status: null,
        },
      );
}
export namespace eraseByTeam_id {
  export type Headers = IApiTeams.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/teams/:team_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByTeam_id.Headers>,
    team_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByTeam_id.path(team_id),
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