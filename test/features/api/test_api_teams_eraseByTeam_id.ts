import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_teams_eraseByTeam_id(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.eraseByTeam_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
