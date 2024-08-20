import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook_minus_delivery_minus_item } from "@ORGANIZATION/PROJECT-api/lib/structures/hook_minus_delivery_minus_item";
import { IApiAppHookDeliveries } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiAppHookDeliveries";

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
