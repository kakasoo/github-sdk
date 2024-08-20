import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

export async function test_api_orgs_invitations_teams_getByOrgAndInvitation_id(
  connection: api.IConnection,
) {
  const output: team[] =
    await api.functional.orgs.invitations.teams.getByOrgAndInvitation_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
