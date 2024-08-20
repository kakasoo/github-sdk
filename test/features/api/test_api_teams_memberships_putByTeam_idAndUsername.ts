import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_membership";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_teams_memberships_putByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output: team_minus_membership =
    await api.functional.teams.memberships.putByTeam_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
