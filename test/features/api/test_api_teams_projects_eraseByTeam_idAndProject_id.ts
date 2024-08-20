import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_teams_projects_eraseByTeam_idAndProject_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.teams.projects.eraseByTeam_idAndProject_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
