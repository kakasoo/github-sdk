import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiMarketplaceListingStubbedPlans } from "../../../../structures/IApiMarketplaceListingStubbedPlans";
import { marketplace_minus_listing_minus_plan } from "../../../../structures/marketplace_minus_listing_minus_plan";
export * as accounts from "./accounts";
/**
 * List plans (stubbed).
 * Lists all plans that are part of your GitHub Marketplace listing.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth apps must use [basic authentication](https://docs.github.com/rest/authentication/authenticating-to-the-rest-api#using-basic-authentication) with their client ID and client secret to access this endpoint.
 *
 * @tag apps
 * @path marketplace_listing/stubbed/plans
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiMarketplaceListingStubbedPlans.GetHeader;
  export type Output = marketplace_minus_listing_minus_plan[];

  export const METADATA = {
    method: "GET",
    path: "/marketplace_listing/stubbed/plans",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/marketplace_listing/stubbed/plans";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): marketplace_minus_listing_minus_plan[] =>
    typia.random<marketplace_minus_listing_minus_plan[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
