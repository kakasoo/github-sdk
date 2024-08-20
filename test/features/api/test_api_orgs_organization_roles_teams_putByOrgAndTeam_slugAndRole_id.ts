import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_organization_roles_teams_putByOrgAndTeam_slugAndRole_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.organization_roles.teams.putByOrgAndTeam_slugAndRole_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
