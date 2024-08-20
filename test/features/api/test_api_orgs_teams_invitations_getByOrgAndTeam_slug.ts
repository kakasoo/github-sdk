import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_invitation";

export async function test_api_orgs_teams_invitations_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation[] =
    await api.functional.orgs.teams.invitations.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
