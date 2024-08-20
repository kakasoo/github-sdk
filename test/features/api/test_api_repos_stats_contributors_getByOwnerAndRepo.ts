import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { contributor_minus_activity } from "@ORGANIZATION/PROJECT-api/lib/structures/contributor_minus_activity";

export async function test_api_repos_stats_contributors_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: contributor_minus_activity[] =
    await api.functional.repos.stats.contributors.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
