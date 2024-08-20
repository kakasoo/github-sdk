import api from "@kakasoo/github-sdk";
import { IApiMarketplaceListingPlansAccounts } from "@kakasoo/github-sdk/lib/structures/IApiMarketplaceListingPlansAccounts";
import { marketplace_minus_purchase } from "@kakasoo/github-sdk/lib/structures/marketplace_minus_purchase";
import typia from "typia";

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
