import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsSecurityAdvisories } from "../../../structures/IApiOrgsSecurityAdvisories";
import { repository_minus_advisory } from "../../../structures/repository_minus_advisory";
/**
 * List repository security advisories for an organization.
 * Lists repository security advisories for an organization.
 *
 * The authenticated user must be an owner or security manager for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.
 *
 * @tag security-advisories
 * @path orgs/:org/security-advisories
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
  export type Headers = IApiOrgsSecurityAdvisories.GetHeader;
  export type Query = IApiOrgsSecurityAdvisories.GetQuery;
  export type Output = repository_minus_advisory[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/security-advisories",
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
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/security-advisories`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_advisory[] =>
    typia.random<repository_minus_advisory[]>(g);
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
