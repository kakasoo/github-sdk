import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { runner } from "@ORGANIZATION/PROJECT-api/lib/structures/runner";

export async function test_api_repos_actions_runners_getByOwnerAndRepoAndRunner_id(
  connection: api.IConnection,
) {
  const output: runner =
    await api.functional.repos.actions.runners.getByOwnerAndRepoAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
