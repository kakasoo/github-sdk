import api from "@kakasoo/github-sdk";
import { contributor_minus_activity } from "@kakasoo/github-sdk/lib/structures/contributor_minus_activity";
import typia from "typia";

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
