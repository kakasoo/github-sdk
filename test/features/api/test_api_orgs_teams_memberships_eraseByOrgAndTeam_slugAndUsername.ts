import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_teams_memberships_eraseByOrgAndTeam_slugAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.memberships.eraseByOrgAndTeam_slugAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
