import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_teams_projects_eraseByOrgAndTeam_slugAndProject_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.projects.eraseByOrgAndTeam_slugAndProject_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
