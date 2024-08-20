import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_repos_branches_protection_restrictions_teams_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: team[] =
    await api.functional.repos.branches.protection.restrictions.teams.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
