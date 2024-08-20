import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsHooks } from "../../../structures/IApiOrgsHooks";
import { body } from "../../../structures/body";
import { org_minus_hook } from "../../../structures/org_minus_hook";

export * as config from "./config";
export * as deliveries from "./deliveries";
export * as pings from "./pings";
/**
 * List organization webhooks.
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
 * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks
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
  export type Headers = IApiOrgsHooks.GetHeader;
  export type Output = org_minus_hook[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/hooks",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): org_minus_hook[] => typia.random<org_minus_hook[]>(g);
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
 * Create an organization webhook.
 * Create a hook that posts payloads in JSON format.
 *
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or
 * edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks
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
  export type Headers = IApiOrgsHooks.PostHeader;
  export type Input = body;
  export type Output = org_minus_hook;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/hooks",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks`;
  export const random = (g?: Partial<typia.IRandomGenerator>): org_minus_hook =>
    typia.random<org_minus_hook>(g);
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
 * Get an organization webhook.
 * Returns a webhook configured in an organization. To get only the webhook
 * `config` properties, see "[Get a webhook configuration for an organization](/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).
 *
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
 * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks/:hook_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndHook_id(
  connection: IConnection<getByOrgAndHook_id.Headers>,
  org: string,
  hook_id: string,
): Promise<getByOrgAndHook_id.Output> {
  return !!connection.simulate
    ? getByOrgAndHook_id.simulate(connection, org, hook_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndHook_id.METADATA,
          path: getByOrgAndHook_id.path(org, hook_id),
          status: null,
        },
      );
}
export namespace getByOrgAndHook_id {
  export type Headers = IApiOrgsHooks.GetHeader;
  export type Output = org_minus_hook;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/hooks/:hook_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, hook_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks/${encodeURIComponent(hook_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): org_minus_hook =>
    typia.random<org_minus_hook>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndHook_id.Headers>,
    org: string,
    hook_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndHook_id.path(org, hook_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("hook_id")(() => typia.assert(hook_id));
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
 * Update an organization webhook.
 * Updates a webhook configured in an organization. When you update a webhook,
 * the `secret` will be overwritten. If you previously had a `secret` set, you must
 * provide the same `secret` or set a new `secret` or the secret will be removed. If
 * you are only updating individual webhook `config` properties, use "[Update a webhook
 * configuration for an organization](/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)".
 *
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
 * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks/:hook_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOrgAndHook_id(
  connection: IConnection<patchByOrgAndHook_id.Headers>,
  org: string,
  hook_id: string,
  body: patchByOrgAndHook_id.Input,
): Promise<patchByOrgAndHook_id.Output> {
  return !!connection.simulate
    ? patchByOrgAndHook_id.simulate(connection, org, hook_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByOrgAndHook_id.METADATA,
          path: patchByOrgAndHook_id.path(org, hook_id),
          status: null,
        },
        body,
      );
}
export namespace patchByOrgAndHook_id {
  export type Headers = IApiOrgsHooks.PatchHeader;
  export type Input = body;
  export type Output = org_minus_hook;

  export const METADATA = {
    method: "PATCH",
    path: "/orgs/:org/hooks/:hook_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, hook_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks/${encodeURIComponent(hook_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): org_minus_hook =>
    typia.random<org_minus_hook>(g);
  export const simulate = (
    connection: IConnection<patchByOrgAndHook_id.Headers>,
    org: string,
    hook_id: string,
    body: patchByOrgAndHook_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOrgAndHook_id.path(org, hook_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("hook_id")(() => typia.assert(hook_id));
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
 * Delete an organization webhook.
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
 * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks/:hook_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndHook_id(
  connection: IConnection<eraseByOrgAndHook_id.Headers>,
  org: string,
  hook_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndHook_id.simulate(connection, org, hook_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndHook_id.METADATA,
          path: eraseByOrgAndHook_id.path(org, hook_id),
          status: null,
        },
      );
}
export namespace eraseByOrgAndHook_id {
  export type Headers = IApiOrgsHooks.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/hooks/:hook_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, hook_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks/${encodeURIComponent(hook_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndHook_id.Headers>,
    org: string,
    hook_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndHook_id.path(org, hook_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("hook_id")(() => typia.assert(hook_id));
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
