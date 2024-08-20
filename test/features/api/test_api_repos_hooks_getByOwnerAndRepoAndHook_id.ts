import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook } from "@ORGANIZATION/PROJECT-api/lib/structures/hook";

export async function test_api_repos_hooks_getByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output: hook =
    await api.functional.repos.hooks.getByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
