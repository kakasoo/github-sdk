import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsActionsRunnersLabels } from "../../../../../structures/IApiOrgsActionsRunnersLabels";
import { response } from "../../../../../structures/response";
import { body } from "../../../../../structures/body";
/**
 * List labels for a self-hosted runner for an organization.
 * Lists all labels for a self-hosted runner configured in an organization.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/:runner_id/labels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndRunner_id(
  connection: IConnection<getByOrgAndRunner_id.Headers>,
  org: string,
  runner_id: string,
): Promise<getByOrgAndRunner_id.Output> {
  return !!connection.simulate
    ? getByOrgAndRunner_id.simulate(connection, org, runner_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndRunner_id.METADATA,
          path: getByOrgAndRunner_id.path(org, runner_id),
          status: null,
        },
      );
}
export namespace getByOrgAndRunner_id {
  export type Headers = IApiOrgsActionsRunnersLabels.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/actions/runners/:runner_id/labels",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, runner_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/${encodeURIComponent(runner_id ?? "null")}/labels`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndRunner_id.Headers>,
    org: string,
    runner_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndRunner_id.path(org, runner_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("runner_id")(() => typia.assert(runner_id));
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
 * Add custom labels to a self-hosted runner for an organization.
 * Adds custom labels to a self-hosted runner configured in an organization.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/:runner_id/labels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndRunner_id(
  connection: IConnection<postByOrgAndRunner_id.Headers>,
  org: string,
  runner_id: string,
  body: postByOrgAndRunner_id.Input,
): Promise<postByOrgAndRunner_id.Output> {
  return !!connection.simulate
    ? postByOrgAndRunner_id.simulate(connection, org, runner_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrgAndRunner_id.METADATA,
          path: postByOrgAndRunner_id.path(org, runner_id),
          status: null,
        },
        body,
      );
}
export namespace postByOrgAndRunner_id {
  export type Headers = IApiOrgsActionsRunnersLabels.PostHeader;
  export type Input = body;
  export type Output = response;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/actions/runners/:runner_id/labels",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, runner_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/${encodeURIComponent(runner_id ?? "null")}/labels`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndRunner_id.Headers>,
    org: string,
    runner_id: string,
    body: postByOrgAndRunner_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndRunner_id.path(org, runner_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("runner_id")(() => typia.assert(runner_id));
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
 * Set custom labels for a self-hosted runner for an organization.
 * Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in an organization.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/:runner_id/labels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndRunner_id(
  connection: IConnection<putByOrgAndRunner_id.Headers>,
  org: string,
  runner_id: string,
  body: putByOrgAndRunner_id.Input,
): Promise<putByOrgAndRunner_id.Output> {
  return !!connection.simulate
    ? putByOrgAndRunner_id.simulate(connection, org, runner_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrgAndRunner_id.METADATA,
          path: putByOrgAndRunner_id.path(org, runner_id),
          status: null,
        },
        body,
      );
}
export namespace putByOrgAndRunner_id {
  export type Headers = IApiOrgsActionsRunnersLabels.PutHeader;
  export type Input = body;
  export type Output = response;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/actions/runners/:runner_id/labels",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, runner_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/${encodeURIComponent(runner_id ?? "null")}/labels`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndRunner_id.Headers>,
    org: string,
    runner_id: string,
    body: putByOrgAndRunner_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndRunner_id.path(org, runner_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("runner_id")(() => typia.assert(runner_id));
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
 * Remove all custom labels from a self-hosted runner for an organization.
 * Remove all custom labels from a self-hosted runner configured in an
 * organization. Returns the remaining read-only labels from the runner.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/:runner_id/labels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndRunner_id(
  connection: IConnection<eraseByOrgAndRunner_id.Headers>,
  org: string,
  runner_id: string,
): Promise<eraseByOrgAndRunner_id.Output> {
  return !!connection.simulate
    ? eraseByOrgAndRunner_id.simulate(connection, org, runner_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndRunner_id.METADATA,
          path: eraseByOrgAndRunner_id.path(org, runner_id),
          status: null,
        },
      );
}
export namespace eraseByOrgAndRunner_id {
  export type Headers = IApiOrgsActionsRunnersLabels.DeleteHeader;
  export type Output = response;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/actions/runners/:runner_id/labels",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, runner_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/${encodeURIComponent(runner_id ?? "null")}/labels`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndRunner_id.Headers>,
    org: string,
    runner_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndRunner_id.path(org, runner_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("runner_id")(() => typia.assert(runner_id));
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
 * Remove a custom label from a self-hosted runner for an organization.
 * Remove a custom label from a self-hosted runner configured
 * in an organization. Returns the remaining labels from the runner.
 *
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 *
 * Authenticated users must have admin access to the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/runners/:runner_id/labels/:name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndRunner_idAndName(
  connection: IConnection<eraseByOrgAndRunner_idAndName.Headers>,
  org: string,
  runner_id: string,
  name: string,
): Promise<eraseByOrgAndRunner_idAndName.Output> {
  return !!connection.simulate
    ? eraseByOrgAndRunner_idAndName.simulate(connection, org, runner_id, name)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndRunner_idAndName.METADATA,
          path: eraseByOrgAndRunner_idAndName.path(org, runner_id, name),
          status: null,
        },
      );
}
export namespace eraseByOrgAndRunner_idAndName {
  export type Headers = IApiOrgsActionsRunnersLabels.DeleteHeader;
  export type Output = response;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/actions/runners/:runner_id/labels/:name",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, runner_id: string, name: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/runners/${encodeURIComponent(runner_id ?? "null")}/labels/${encodeURIComponent(name ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndRunner_idAndName.Headers>,
    org: string,
    runner_id: string,
    name: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndRunner_idAndName.path(org, runner_id, name),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("runner_id")(() => typia.assert(runner_id));
      assert.param("name")(() => typia.assert(name));
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