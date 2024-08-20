import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook } from "@ORGANIZATION/PROJECT-api/lib/structures/hook";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_hooks_patchByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output: hook =
    await api.functional.repos.hooks.patchByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
