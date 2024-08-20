import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_organization_roles_teams_eraseByOrgAndTeam_slugAndRole_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.organization_roles.teams.eraseByOrgAndTeam_slugAndRole_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
