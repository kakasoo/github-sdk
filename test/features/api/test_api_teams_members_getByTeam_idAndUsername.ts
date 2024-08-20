import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_teams_members_getByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.members.getByTeam_idAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
