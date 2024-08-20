import api from "@kakasoo/github-sdk";
import { user_minus_marketplace_minus_purchase } from "@kakasoo/github-sdk/lib/structures/user_minus_marketplace_minus_purchase";
import typia from "typia";

export async function test_api_user_marketplace_purchases_get(
  connection: api.IConnection,
) {
  const output: user_minus_marketplace_minus_purchase[] =
    await api.functional.user.marketplace_purchases.get(connection);
  typia.assert(output);
}
