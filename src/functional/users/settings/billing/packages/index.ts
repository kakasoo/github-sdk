import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUsersSettingsBillingPackages } from "../../../../../structures/IApiUsersSettingsBillingPackages";
import { packages_minus_billing_minus_usage } from "../../../../../structures/packages_minus_billing_minus_usage";

/**
 * Get GitHub Packages billing for a user.
 * Gets the free and paid storage used for GitHub Packages in gigabytes.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
 *
 * @tag billing
 * @path users/:username/settings/billing/packages
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsername(
  connection: IConnection<getByUsername.Headers>,
  username: string,
): Promise<getByUsername.Output> {
  return !!connection.simulate
    ? getByUsername.simulate(connection, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByUsername.METADATA,
          path: getByUsername.path(username),
          status: null,
        },
      );
}
export namespace getByUsername {
  export type Headers = IApiUsersSettingsBillingPackages.GetHeader;
  export type Output = packages_minus_billing_minus_usage;

  export const METADATA = {
    method: "GET",
    path: "/users/:username/settings/billing/packages",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (username: string) =>
    `/users/${encodeURIComponent(username ?? "null")}/settings/billing/packages`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): packages_minus_billing_minus_usage =>
    typia.random<packages_minus_billing_minus_usage>(g);
  export const simulate = (
    connection: IConnection<getByUsername.Headers>,
    username: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByUsername.path(username),
      contentType: "application/json",
    });
    try {
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
