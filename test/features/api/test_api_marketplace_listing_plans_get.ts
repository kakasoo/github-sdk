import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { marketplace_minus_listing_minus_plan } from "@ORGANIZATION/PROJECT-api/lib/structures/marketplace_minus_listing_minus_plan";

export async function test_api_marketplace_listing_plans_get(
  connection: api.IConnection,
) {
  const output: marketplace_minus_listing_minus_plan[] =
    await api.functional.marketplace_listing.plans.get(connection);
  typia.assert(output);
}
