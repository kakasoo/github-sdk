import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_full";

export async function test_api_user_teams_get(connection: api.IConnection) {
  const output: team_minus_full[] =
    await api.functional.user.teams.get(connection);
  typia.assert(output);
}
