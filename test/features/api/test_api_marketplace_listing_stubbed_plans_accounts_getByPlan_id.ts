import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { marketplace_minus_purchase } from "@ORGANIZATION/PROJECT-api/lib/structures/marketplace_minus_purchase";
import { IApiMarketplaceListingStubbedPlansAccounts } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiMarketplaceListingStubbedPlansAccounts";

export async function test_api_marketplace_listing_stubbed_plans_accounts_getByPlan_id(
  connection: api.IConnection,
) {
  const output: marketplace_minus_purchase[] =
    await api.functional.marketplace_listing.stubbed.plans.accounts.getByPlan_id(
      connection,
      typia.random<string>(),
      typia.random<IApiMarketplaceListingStubbedPlansAccounts.GetQuery>(),
    );
  typia.assert(output);
}
