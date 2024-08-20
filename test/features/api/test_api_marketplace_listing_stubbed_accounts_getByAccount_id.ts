import api from "@kakasoo/github-sdk";
import { marketplace_minus_purchase } from "@kakasoo/github-sdk/lib/structures/marketplace_minus_purchase";
import typia from "typia";

export async function test_api_marketplace_listing_stubbed_accounts_getByAccount_id(
  connection: api.IConnection,
) {
  const output: marketplace_minus_purchase =
    await api.functional.marketplace_listing.stubbed.accounts.getByAccount_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
