import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_repository";

export async function test_api_orgs_teams_repos_getByOrgAndTeam_slugAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: team_minus_repository =
    await api.functional.orgs.teams.repos.getByOrgAndTeam_slugAndOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
