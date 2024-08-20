import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

export async function test_api_teams_teams_getByTeam_id(
  connection: api.IConnection,
) {
  const output: team[] = await api.functional.teams.teams.getByTeam_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
