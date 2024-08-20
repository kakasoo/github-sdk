import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_repos_branches_protection_restrictions_teams_postByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: team[] =
    await api.functional.repos.branches.protection.restrictions.teams.postByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
