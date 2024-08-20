import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { marketplace_minus_purchase } from "@ORGANIZATION/PROJECT-api/lib/structures/marketplace_minus_purchase";
import { IApiMarketplaceListingPlansAccounts } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiMarketplaceListingPlansAccounts";

export async function test_api_marketplace_listing_plans_accounts_getByPlan_id(
  connection: api.IConnection,
) {
  const output: marketplace_minus_purchase[] =
    await api.functional.marketplace_listing.plans.accounts.getByPlan_id(
      connection,
      typia.random<string>(),
      typia.random<IApiMarketplaceListingPlansAccounts.GetQuery>(),
    );
  typia.assert(output);
}
