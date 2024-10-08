import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiTeamsProjects } from "../../../structures/IApiTeamsProjects";
import { body } from "../../../structures/body";
import { team_minus_project } from "../../../structures/team_minus_project";

/**
 * List team projects (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/rest/teams/teams#list-team-projects) endpoint.
 *
 * Lists the organization projects for a team.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/projects
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
  export type Headers = IApiTeamsProjects.GetHeader;
  export type Output = team_minus_project[];

  export const METADATA = {
    method: "GET",
    path: "/teams/:team_id/projects",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/projects`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_project[] => typia.random<team_minus_project[]>(g);
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
 * Check team permissions for a project (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project) endpoint.
 *
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/projects/:project_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByTeam_idAndProject_id(
  connection: IConnection<getByTeam_idAndProject_id.Headers>,
  team_id: string,
  project_id: string,
): Promise<getByTeam_idAndProject_id.Output> {
  return !!connection.simulate
    ? getByTeam_idAndProject_id.simulate(connection, team_id, project_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByTeam_idAndProject_id.METADATA,
          path: getByTeam_idAndProject_id.path(team_id, project_id),
          status: null,
        },
      );
}
export namespace getByTeam_idAndProject_id {
  export type Headers = IApiTeamsProjects.GetHeader;
  export type Output = team_minus_project;

  export const METADATA = {
    method: "GET",
    path: "/teams/:team_id/projects/:project_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, project_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/projects/${encodeURIComponent(project_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): team_minus_project => typia.random<team_minus_project>(g);
  export const simulate = (
    connection: IConnection<getByTeam_idAndProject_id.Headers>,
    team_id: string,
    project_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByTeam_idAndProject_id.path(team_id, project_id),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
      assert.param("project_id")(() => typia.assert(project_id));
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
 * Add or update team project permissions (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions) endpoint.
 *
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/projects/:project_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByTeam_idAndProject_id(
  connection: IConnection<putByTeam_idAndProject_id.Headers>,
  team_id: string,
  project_id: string,
  body: putByTeam_idAndProject_id.Input,
): Promise<void> {
  return !!connection.simulate
    ? putByTeam_idAndProject_id.simulate(connection, team_id, project_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByTeam_idAndProject_id.METADATA,
          path: putByTeam_idAndProject_id.path(team_id, project_id),
          status: null,
        },
        body,
      );
}
export namespace putByTeam_idAndProject_id {
  export type Headers = IApiTeamsProjects.PutHeader;
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/teams/:team_id/projects/:project_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, project_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/projects/${encodeURIComponent(project_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByTeam_idAndProject_id.Headers>,
    team_id: string,
    project_id: string,
    body: putByTeam_idAndProject_id.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByTeam_idAndProject_id.path(team_id, project_id),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
      assert.param("project_id")(() => typia.assert(project_id));
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
 * Remove a project from a team (Legacy).
 * > [!WARNING]
 * > **Deprecation notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team) endpoint.
 *
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
 *
 * @tag teams
 * @deprecated
 * @path teams/:team_id/projects/:project_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByTeam_idAndProject_id(
  connection: IConnection<eraseByTeam_idAndProject_id.Headers>,
  team_id: string,
  project_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByTeam_idAndProject_id.simulate(connection, team_id, project_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByTeam_idAndProject_id.METADATA,
          path: eraseByTeam_idAndProject_id.path(team_id, project_id),
          status: null,
        },
      );
}
export namespace eraseByTeam_idAndProject_id {
  export type Headers = IApiTeamsProjects.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/teams/:team_id/projects/:project_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (team_id: string, project_id: string) =>
    `/teams/${encodeURIComponent(team_id ?? "null")}/projects/${encodeURIComponent(project_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByTeam_idAndProject_id.Headers>,
    team_id: string,
    project_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByTeam_idAndProject_id.path(team_id, project_id),
      contentType: "application/json",
    });
    try {
      assert.param("team_id")(() => typia.assert(team_id));
      assert.param("project_id")(() => typia.assert(project_id));
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
