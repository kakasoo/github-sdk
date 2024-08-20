import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_membership";

export async function test_api_orgs_teams_memberships_getByOrgAndTeam_slugAndUsername(
  connection: api.IConnection,
) {
  const output: team_minus_membership =
    await api.functional.orgs.teams.memberships.getByOrgAndTeam_slugAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
