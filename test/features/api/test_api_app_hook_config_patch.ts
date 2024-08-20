import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { webhook_minus_config } from "@ORGANIZATION/PROJECT-api/lib/structures/webhook_minus_config";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_app_hook_config_patch(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.app.hook.config.patch(
      connection,
      typia.random<body>(),
    );
  typia.assert(output);
}
