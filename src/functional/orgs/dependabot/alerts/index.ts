import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsDependabotAlerts } from "../../../../structures/IApiOrgsDependabotAlerts";
import { dependabot_minus_alert_minus_with_minus_repository } from "../../../../structures/dependabot_minus_alert_minus_with_minus_repository";

/**
 * List Dependabot alerts for an organization.
 * Lists Dependabot alerts for an organization.
 *
 * The authenticated user must be an owner or security manager for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
 *
 * @tag dependabot
 * @path orgs/:org/dependabot/alerts
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
  export type Headers = IApiOrgsDependabotAlerts.GetHeader;
  export type Output = dependabot_minus_alert_minus_with_minus_repository[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/dependabot/alerts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/dependabot/alerts`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): dependabot_minus_alert_minus_with_minus_repository[] =>
    typia.random<dependabot_minus_alert_minus_with_minus_repository[]>(g);
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
