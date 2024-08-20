import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_discussion } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_discussion";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_teams_discussions_postByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: team_minus_discussion =
    await api.functional.orgs.teams.discussions.postByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
