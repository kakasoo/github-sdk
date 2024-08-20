import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiTeamsDiscussionsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiTeamsDiscussionsReactions";

export async function test_api_teams_discussions_reactions_getByTeam_idAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.teams.discussions.reactions.getByTeam_idAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiTeamsDiscussionsReactions.GetQuery>(),
    );
  typia.assert(output);
}
