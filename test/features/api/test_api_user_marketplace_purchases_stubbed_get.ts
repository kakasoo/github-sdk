import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { user_minus_marketplace_minus_purchase } from "@ORGANIZATION/PROJECT-api/lib/structures/user_minus_marketplace_minus_purchase";

export async function test_api_user_marketplace_purchases_stubbed_get(
  connection: api.IConnection,
) {
  const output: user_minus_marketplace_minus_purchase[] =
    await api.functional.user.marketplace_purchases.stubbed.get(connection);
  typia.assert(output);
}
