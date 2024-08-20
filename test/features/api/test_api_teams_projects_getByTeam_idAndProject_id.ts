import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_project } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_project";

export async function test_api_teams_projects_getByTeam_idAndProject_id(
  connection: api.IConnection,
) {
  const output: team_minus_project =
    await api.functional.teams.projects.getByTeam_idAndProject_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
