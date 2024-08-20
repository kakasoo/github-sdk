import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_invitation";

export async function test_api_teams_invitations_getByTeam_id(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation[] =
    await api.functional.teams.invitations.getByTeam_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
