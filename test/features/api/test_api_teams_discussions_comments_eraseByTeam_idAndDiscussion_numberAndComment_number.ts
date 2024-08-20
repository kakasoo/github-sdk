import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_teams_discussions_comments_eraseByTeam_idAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.teams.discussions.comments.eraseByTeam_idAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
