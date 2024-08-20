import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_discussion_minus_comment } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion_minus_comment";
import typia from "typia";

export async function test_api_teams_discussions_comments_patchByTeam_idAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output: team_minus_discussion_minus_comment =
    await api.functional.teams.discussions.comments.patchByTeam_idAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
