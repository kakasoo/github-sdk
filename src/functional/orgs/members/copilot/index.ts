import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsMembersCopilot } from "../../../../structures/IApiOrgsMembersCopilot";
import { copilot_minus_seat_minus_details } from "../../../../structures/copilot_minus_seat_minus_details";

/**
 * Get Copilot seat assignment details for a user.
 * > [!NOTE]
 * > This endpoint is in beta and is subject to change.
 *
 * Gets the GitHub Copilot seat assignment details for a member of an organization who currently has access to GitHub Copilot.
 *
 * Only organization owners can view Copilot seat assignment details for members of their organization.
 *
 * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
 *
 * @tag copilot
 * @path orgs/:org/members/:username/copilot
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndUsername(
  connection: IConnection<getByOrgAndUsername.Headers>,
  org: string,
  username: string,
): Promise<getByOrgAndUsername.Output> {
  return !!connection.simulate
    ? getByOrgAndUsername.simulate(connection, org, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndUsername.METADATA,
          path: getByOrgAndUsername.path(org, username),
          status: null,
        },
      );
}
export namespace getByOrgAndUsername {
  export type Headers = IApiOrgsMembersCopilot.GetHeader;
  export type Output = copilot_minus_seat_minus_details;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/members/:username/copilot",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, username: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/members/${encodeURIComponent(username ?? "null")}/copilot`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): copilot_minus_seat_minus_details =>
    typia.random<copilot_minus_seat_minus_details>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndUsername.Headers>,
    org: string,
    username: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndUsername.path(org, username),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
