import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
