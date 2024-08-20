import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_teams_memberships_eraseByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.teams.memberships.eraseByTeam_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
