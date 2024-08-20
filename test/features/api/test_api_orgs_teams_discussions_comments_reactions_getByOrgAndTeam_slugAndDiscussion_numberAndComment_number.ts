import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiOrgsTeamsDiscussionsCommentsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsTeamsDiscussionsCommentsReactions";

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
