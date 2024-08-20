import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_full";

export async function test_api_teams_getByTeam_id(connection: api.IConnection) {
  const output: team_minus_full = await api.functional.teams.getByTeam_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}