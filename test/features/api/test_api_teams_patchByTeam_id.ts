import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_full";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_teams_patchByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_full = await api.functional.teams.patchByTeam_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
