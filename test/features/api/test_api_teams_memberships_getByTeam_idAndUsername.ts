import api from "@kakasoo/github-sdk";
import { team_minus_membership } from "@kakasoo/github-sdk/lib/structures/team_minus_membership";
import typia from "typia";

export async function test_api_teams_memberships_getByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output: team_minus_membership =
    await api.functional.teams.memberships.getByTeam_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
