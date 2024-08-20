import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { webhook_minus_config } from "@ORGANIZATION/PROJECT-api/lib/structures/webhook_minus_config";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_hooks_config_patchByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output: webhook_minus_config =
    await api.functional.repos.hooks.config.patchByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
