import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { webhook_minus_config } from "@ORGANIZATION/PROJECT-api/lib/structures/webhook_minus_config";

export async function test_api_orgs_hooks_config_getByOrgAndHook_id(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.orgs.hooks.config.getByOrgAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
