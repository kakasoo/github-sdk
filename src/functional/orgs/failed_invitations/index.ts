import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsFailedInvitations } from "../../../structures/IApiOrgsFailedInvitations";
import { organization_minus_invitation } from "../../../structures/organization_minus_invitation";

/**
 * List failed organization invitations.
 * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
 *
 * @tag orgs
 * @path orgs/:org/failed_invitations
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
  export type Headers = IApiOrgsFailedInvitations.GetHeader;
  export type Output = organization_minus_invitation[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/failed_invitations",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/failed_invitations`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): organization_minus_invitation[] =>
    typia.random<organization_minus_invitation[]>(g);
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
