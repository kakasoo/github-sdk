import api from "@kakasoo/github-sdk";
import { team_minus_project } from "@kakasoo/github-sdk/lib/structures/team_minus_project";
import typia from "typia";

export async function test_api_teams_projects_getByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_project[] =
    await api.functional.teams.projects.getByTeam_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
