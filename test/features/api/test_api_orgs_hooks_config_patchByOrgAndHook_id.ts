import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { webhook_minus_config } from "@kakasoo/github-sdk/lib/structures/webhook_minus_config";
import typia from "typia";

export async function test_api_orgs_hooks_config_patchByOrgAndHook_id(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.orgs.hooks.config.patchByOrgAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
