import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiProjectsCollaborators } from "../../../structures/IApiProjectsCollaborators";
import { simple_minus_user } from "../../../structures/simple_minus_user";
import { body } from "../../../structures/body";
export * as permission from "./permission";
/**
 * List project collaborators.
 * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
 *
 * @tag projects
 * @path projects/:project_id/collaborators
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByProject_id(
  connection: IConnection<getByProject_id.Headers>,
  project_id: string,
  query: getByProject_id.Query,
): Promise<getByProject_id.Output> {
  return !!connection.simulate
    ? getByProject_id.simulate(connection, project_id, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByProject_id.METADATA,
          path: getByProject_id.path(project_id, query),
          status: null,
        },
      );
}
export namespace getByProject_id {
  export type Headers = IApiProjectsCollaborators.GetHeader;
  export type Query = IApiProjectsCollaborators.GetQuery;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/projects/:project_id/collaborators",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (project_id: string, query: getByProject_id.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/projects/${encodeURIComponent(project_id ?? "null")}/collaborators`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_user[] => typia.random<simple_minus_user[]>(g);
  export const simulate = (
    connection: IConnection<getByProject_id.Headers>,
    project_id: string,
    query: getByProject_id.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByProject_id.path(project_id, query),
      contentType: "application/json",
    });
    try {
      assert.param("project_id")(() => typia.assert(project_id));
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
 * Add project collaborator.
 * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
 *
 * @tag projects
 * @path projects/:project_id/collaborators/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByProject_idAndUsername(
  connection: IConnection<putByProject_idAndUsername.Headers>,
  project_id: string,
  username: string,
  body: putByProject_idAndUsername.Input,
): Promise<void> {
  return !!connection.simulate
    ? putByProject_idAndUsername.simulate(
        connection,
        project_id,
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
          ...putByProject_idAndUsername.METADATA,
          path: putByProject_idAndUsername.path(project_id, username),
          status: null,
        },
        body,
      );
}
export namespace putByProject_idAndUsername {
  export type Headers = IApiProjectsCollaborators.PutHeader;
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/projects/:project_id/collaborators/:username",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (project_id: string, username: string) =>
    `/projects/${encodeURIComponent(project_id ?? "null")}/collaborators/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByProject_idAndUsername.Headers>,
    project_id: string,
    username: string,
    body: putByProject_idAndUsername.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByProject_idAndUsername.path(project_id, username),
      contentType: "application/json",
    });
    try {
      assert.param("project_id")(() => typia.assert(project_id));
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
 * Remove user as a collaborator.
 * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
 *
 * @tag projects
 * @path projects/:project_id/collaborators/:username
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByProject_idAndUsername(
  connection: IConnection<eraseByProject_idAndUsername.Headers>,
  project_id: string,
  username: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByProject_idAndUsername.simulate(connection, project_id, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByProject_idAndUsername.METADATA,
          path: eraseByProject_idAndUsername.path(project_id, username),
          status: null,
        },
      );
}
export namespace eraseByProject_idAndUsername {
  export type Headers = IApiProjectsCollaborators.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/projects/:project_id/collaborators/:username",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (project_id: string, username: string) =>
    `/projects/${encodeURIComponent(project_id ?? "null")}/collaborators/${encodeURIComponent(username ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByProject_idAndUsername.Headers>,
    project_id: string,
    username: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByProject_idAndUsername.path(project_id, username),
      contentType: "application/json",
    });
    try {
      assert.param("project_id")(() => typia.assert(project_id));
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
