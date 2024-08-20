import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_teams_projects_putByTeam_idAndProject_id(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.projects.putByTeam_idAndProject_id(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
