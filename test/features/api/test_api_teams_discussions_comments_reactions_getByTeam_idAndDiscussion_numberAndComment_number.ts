import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiTeamsDiscussionsCommentsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiTeamsDiscussionsCommentsReactions";

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
