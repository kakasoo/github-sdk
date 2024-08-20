import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook_minus_delivery } from "@ORGANIZATION/PROJECT-api/lib/structures/hook_minus_delivery";

export async function test_api_app_hook_deliveries_getByDelivery_id(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery =
    await api.functional.app.hook.deliveries.getByDelivery_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
