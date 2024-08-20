import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsCodeScanningAlerts } from "../../../../structures/IApiOrgsCodeScanningAlerts";
import { code_minus_scanning_minus_organization_minus_alert_minus_items } from "../../../../structures/code_minus_scanning_minus_organization_minus_alert_minus_items";
/**
 * List code scanning alerts for an organization.
 * Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 *
 * The authenticated user must be an owner or security manager for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `security_events` or `repo`s cope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
 *
 * @tag code-scanning
 * @path orgs/:org/code-scanning/alerts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
  query: getByOrg.Query,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org, query)
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
          path: getByOrg.path(org, query),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsCodeScanningAlerts.GetHeader;
  export type Query = IApiOrgsCodeScanningAlerts.GetQuery;
  export type Output =
    code_minus_scanning_minus_organization_minus_alert_minus_items[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/code-scanning/alerts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, query: getByOrg.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/code-scanning/alerts`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): code_minus_scanning_minus_organization_minus_alert_minus_items[] =>
    typia.random<
      code_minus_scanning_minus_organization_minus_alert_minus_items[]
    >(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
    query: getByOrg.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org, query),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
