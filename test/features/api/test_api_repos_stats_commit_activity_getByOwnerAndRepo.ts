import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit_minus_activity } from "@ORGANIZATION/PROJECT-api/lib/structures/commit_minus_activity";

export async function test_api_repos_stats_commit_activity_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: commit_minus_activity[] =
    await api.functional.repos.stats.commit_activity.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
