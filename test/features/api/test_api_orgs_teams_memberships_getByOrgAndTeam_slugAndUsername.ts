import api from "@kakasoo/github-sdk";
import { team_minus_membership } from "@kakasoo/github-sdk/lib/structures/team_minus_membership";
import typia from "typia";

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
