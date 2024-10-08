import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiEnterprisesCopilotBillingSeats } from "../../../../../structures/IApiEnterprisesCopilotBillingSeats";
import { response } from "../../../../../structures/response";

/**
 * List all Copilot seat assignments for an enterprise.
 * > [!NOTE]
 * > This endpoint is in beta and is subject to change.
 *
 * Lists all active Copilot seats across organizations or enterprise teams for an enterprise with a Copilot Business or Copilot Enterprise subscription.
 *
 * Users with access through multiple organizations or enterprise teams will only be counted toward `total_seats` once.
 *
 * For each organization or enterprise team which grants Copilot access to a user, a seat detail object will appear in the `seats` array.
 *
 * Only enterprise owners and billing managers can view assigned Copilot seats across their child organizations or enterprise teams.
 *
 * Personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.
 *
 * @tag copilot
 * @path enterprises/:enterprise/copilot/billing/seats
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByEnterprise(
  connection: IConnection<getByEnterprise.Headers>,
  enterprise: string,
  query: getByEnterprise.Query,
): Promise<getByEnterprise.Output> {
  return !!connection.simulate
    ? getByEnterprise.simulate(connection, enterprise, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByEnterprise.METADATA,
          path: getByEnterprise.path(enterprise, query),
          status: null,
        },
      );
}
export namespace getByEnterprise {
  export type Headers = IApiEnterprisesCopilotBillingSeats.GetHeader;
  export type Query = IApiEnterprisesCopilotBillingSeats.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/enterprises/:enterprise/copilot/billing/seats",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (enterprise: string, query: getByEnterprise.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/enterprises/${encodeURIComponent(enterprise ?? "null")}/copilot/billing/seats`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByEnterprise.Headers>,
    enterprise: string,
    query: getByEnterprise.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByEnterprise.path(enterprise, query),
      contentType: "application/json",
    });
    try {
      assert.param("enterprise")(() => typia.assert(enterprise));
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
