import api from "@kakasoo/github-sdk";
import { team_minus_discussion } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion";
import typia from "typia";

export async function test_api_teams_discussions_getByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_discussion[] =
    await api.functional.teams.discussions.getByTeam_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
