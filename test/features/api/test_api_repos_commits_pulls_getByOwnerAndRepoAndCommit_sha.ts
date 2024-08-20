import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_simple";

export async function test_api_repos_commits_pulls_getByOwnerAndRepoAndCommit_sha(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple[] =
    await api.functional.repos.commits.pulls.getByOwnerAndRepoAndCommit_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
