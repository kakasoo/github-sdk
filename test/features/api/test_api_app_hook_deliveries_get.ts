import api from "@kakasoo/github-sdk";
import { IApiAppHookDeliveries } from "@kakasoo/github-sdk/lib/structures/IApiAppHookDeliveries";
import { hook_minus_delivery_minus_item } from "@kakasoo/github-sdk/lib/structures/hook_minus_delivery_minus_item";
import typia from "typia";

export async function test_api_app_hook_deliveries_get(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery_minus_item[] =
    await api.functional.app.hook.deliveries.get(
      connection,
      typia.random<IApiAppHookDeliveries.GetQuery>(),
    );
  typia.assert(output);
}
