import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

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
