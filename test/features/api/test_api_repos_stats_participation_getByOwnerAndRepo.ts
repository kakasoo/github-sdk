import api from "@kakasoo/github-sdk";
import { participation_minus_stats } from "@kakasoo/github-sdk/lib/structures/participation_minus_stats";
import typia from "typia";

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
