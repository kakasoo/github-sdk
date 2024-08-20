import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_discussion } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_discussion";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_teams_discussions_patchByTeam_idAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: team_minus_discussion =
    await api.functional.teams.discussions.patchByTeam_idAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
