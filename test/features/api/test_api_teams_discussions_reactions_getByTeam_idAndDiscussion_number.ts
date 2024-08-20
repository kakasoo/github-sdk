import api from "@kakasoo/github-sdk";
import { IApiTeamsDiscussionsReactions } from "@kakasoo/github-sdk/lib/structures/IApiTeamsDiscussionsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

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
