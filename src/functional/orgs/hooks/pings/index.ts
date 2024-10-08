import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsHooksPings } from "../../../../structures/IApiOrgsHooksPings";

/**
 * Ping an organization webhook.
 * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event)
 * to be sent to the hook.
 *
 * You must be an organization owner to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
 * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
 *
 * @tag orgs
 * @path orgs/:org/hooks/:hook_id/pings
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndHook_id(
  connection: IConnection<postByOrgAndHook_id.Headers>,
  org: string,
  hook_id: string,
): Promise<void> {
  return !!connection.simulate
    ? postByOrgAndHook_id.simulate(connection, org, hook_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrgAndHook_id.METADATA,
          path: postByOrgAndHook_id.path(org, hook_id),
          status: null,
        },
      );
}
export namespace postByOrgAndHook_id {
  export type Headers = IApiOrgsHooksPings.PostHeader;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/hooks/:hook_id/pings",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, hook_id: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/hooks/${encodeURIComponent(hook_id ?? "null")}/pings`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndHook_id.Headers>,
    org: string,
    hook_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndHook_id.path(org, hook_id),
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
