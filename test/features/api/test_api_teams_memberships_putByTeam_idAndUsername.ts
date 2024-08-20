import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_membership } from "@kakasoo/github-sdk/lib/structures/team_minus_membership";
import typia from "typia";

export async function test_api_teams_memberships_putByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output: team_minus_membership =
    await api.functional.teams.memberships.putByTeam_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
