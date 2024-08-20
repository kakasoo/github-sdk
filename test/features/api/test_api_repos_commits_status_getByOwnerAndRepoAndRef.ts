import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { combined_minus_commit_minus_status } from "@ORGANIZATION/PROJECT-api/lib/structures/combined_minus_commit_minus_status";

export async function test_api_repos_commits_status_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: combined_minus_commit_minus_status =
    await api.functional.repos.commits.status.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
