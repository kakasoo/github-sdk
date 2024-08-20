import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_discussion } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion";
import typia from "typia";

export async function test_api_teams_discussions_postByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_discussion =
    await api.functional.teams.discussions.postByTeam_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
