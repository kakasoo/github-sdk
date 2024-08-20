import api from "@kakasoo/github-sdk";
import { webhook_minus_config } from "@kakasoo/github-sdk/lib/structures/webhook_minus_config";
import typia from "typia";

export async function test_api_app_hook_config_get(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.app.hook.config.get(connection);
  typia.assert(output);
}
