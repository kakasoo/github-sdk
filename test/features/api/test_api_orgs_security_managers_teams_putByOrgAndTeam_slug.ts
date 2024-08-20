import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_security_managers_teams_putByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.security_managers.teams.putByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
