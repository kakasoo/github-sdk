import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_membership";

export async function test_api_teams_memberships_getByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output: team_minus_membership =
    await api.functional.teams.memberships.getByTeam_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
