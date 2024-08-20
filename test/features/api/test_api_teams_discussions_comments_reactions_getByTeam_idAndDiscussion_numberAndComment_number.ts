import api from "@kakasoo/github-sdk";
import { IApiTeamsDiscussionsCommentsReactions } from "@kakasoo/github-sdk/lib/structures/IApiTeamsDiscussionsCommentsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_teams_discussions_comments_reactions_getByTeam_idAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.teams.discussions.comments.reactions.getByTeam_idAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiTeamsDiscussionsCommentsReactions.GetQuery>(),
    );
  typia.assert(output);
}
