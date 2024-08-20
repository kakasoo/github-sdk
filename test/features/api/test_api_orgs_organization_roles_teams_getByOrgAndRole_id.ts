import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_role_minus_assignment } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_role_minus_assignment";

export async function test_api_orgs_organization_roles_teams_getByOrgAndRole_id(
  connection: api.IConnection,
) {
  const output: team_minus_role_minus_assignment[] =
    await api.functional.orgs.organization_roles.teams.getByOrgAndRole_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
