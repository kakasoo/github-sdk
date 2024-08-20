import api from "@kakasoo/github-sdk";
import { IApiMarketplaceListingStubbedPlansAccounts } from "@kakasoo/github-sdk/lib/structures/IApiMarketplaceListingStubbedPlansAccounts";
import { marketplace_minus_purchase } from "@kakasoo/github-sdk/lib/structures/marketplace_minus_purchase";
import typia from "typia";

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
