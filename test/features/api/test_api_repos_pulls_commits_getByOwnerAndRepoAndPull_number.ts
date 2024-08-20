import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit } from "@ORGANIZATION/PROJECT-api/lib/structures/commit";

export async function test_api_repos_pulls_commits_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: commit[] =
    await api.functional.repos.pulls.commits.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
