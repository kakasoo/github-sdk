import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { marketplace_minus_purchase } from "@ORGANIZATION/PROJECT-api/lib/structures/marketplace_minus_purchase";

export async function test_api_marketplace_listing_accounts_getByAccount_id(
  connection: api.IConnection,
) {
  const output: marketplace_minus_purchase =
    await api.functional.marketplace_listing.accounts.getByAccount_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
