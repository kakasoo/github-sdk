import api from "@kakasoo/github-sdk";
import { IApiOrgsTeamsDiscussionsCommentsReactions } from "@kakasoo/github-sdk/lib/structures/IApiOrgsTeamsDiscussionsCommentsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_orgs_teams_discussions_comments_reactions_getByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.orgs.teams.discussions.comments.reactions.getByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsTeamsDiscussionsCommentsReactions.GetQuery>(),
    );
  typia.assert(output);
}
