import api from "@kakasoo/github-sdk";
import { team_minus_full } from "@kakasoo/github-sdk/lib/structures/team_minus_full";
import typia from "typia";

export async function test_api_user_teams_get(connection: api.IConnection) {
  const output: team_minus_full[] =
    await api.functional.user.teams.get(connection);
  typia.assert(output);
}
