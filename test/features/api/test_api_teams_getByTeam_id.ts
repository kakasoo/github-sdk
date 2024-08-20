import api from "@kakasoo/github-sdk";
import { team_minus_full } from "@kakasoo/github-sdk/lib/structures/team_minus_full";
import typia from "typia";

export async function test_api_teams_getByTeam_id(connection: api.IConnection) {
  const output: team_minus_full = await api.functional.teams.getByTeam_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
