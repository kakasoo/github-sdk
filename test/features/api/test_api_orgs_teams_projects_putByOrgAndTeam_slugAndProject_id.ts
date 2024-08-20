import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_teams_projects_putByOrgAndTeam_slugAndProject_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.projects.putByOrgAndTeam_slugAndProject_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
