import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { status } from "@ORGANIZATION/PROJECT-api/lib/structures/status";

export async function test_api_repos_commits_statuses_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: status[] =
    await api.functional.repos.commits.statuses.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
