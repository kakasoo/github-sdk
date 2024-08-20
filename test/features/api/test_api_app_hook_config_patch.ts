import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { webhook_minus_config } from "@kakasoo/github-sdk/lib/structures/webhook_minus_config";
import typia from "typia";

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
