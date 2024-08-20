import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { webhook_minus_config } from "@ORGANIZATION/PROJECT-api/lib/structures/webhook_minus_config";

export async function test_api_app_hook_config_get(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.app.hook.config.get(connection);
  typia.assert(output);
}
