import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_discussion } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_discussion";

export async function test_api_teams_discussions_getByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_discussion[] =
    await api.functional.teams.discussions.getByTeam_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
