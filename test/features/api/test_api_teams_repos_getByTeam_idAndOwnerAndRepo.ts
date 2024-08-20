import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_repository";

export async function test_api_teams_repos_getByTeam_idAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: team_minus_repository =
    await api.functional.teams.repos.getByTeam_idAndOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
