import api from "@kakasoo/github-sdk";
import { marketplace_minus_listing_minus_plan } from "@kakasoo/github-sdk/lib/structures/marketplace_minus_listing_minus_plan";
import typia from "typia";

export async function test_api_marketplace_listing_plans_get(
  connection: api.IConnection,
) {
  const output: marketplace_minus_listing_minus_plan[] =
    await api.functional.marketplace_listing.plans.get(connection);
  typia.assert(output);
}
