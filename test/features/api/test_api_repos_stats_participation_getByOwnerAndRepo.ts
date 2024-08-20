import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { participation_minus_stats } from "@ORGANIZATION/PROJECT-api/lib/structures/participation_minus_stats";

export async function test_api_repos_stats_participation_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: participation_minus_stats =
    await api.functional.repos.stats.participation.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
