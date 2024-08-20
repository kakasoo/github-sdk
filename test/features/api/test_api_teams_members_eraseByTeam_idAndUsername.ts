import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_teams_members_eraseByTeam_idAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.members.eraseByTeam_idAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
