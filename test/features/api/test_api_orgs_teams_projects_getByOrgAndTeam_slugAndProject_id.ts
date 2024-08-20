import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_project } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_project";

export async function test_api_orgs_teams_projects_getByOrgAndTeam_slugAndProject_id(
  connection: api.IConnection,
) {
  const output: team_minus_project =
    await api.functional.orgs.teams.projects.getByOrgAndTeam_slugAndProject_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
