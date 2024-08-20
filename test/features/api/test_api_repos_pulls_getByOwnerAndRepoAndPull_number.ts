import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request";

export async function test_api_repos_pulls_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request =
    await api.functional.repos.pulls.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
