import api from "@kakasoo/github-sdk";
import { IApiOrgsTeamsDiscussionsReactions } from "@kakasoo/github-sdk/lib/structures/IApiOrgsTeamsDiscussionsReactions";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_orgs_teams_discussions_reactions_getByOrgAndTeam_slugAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.orgs.teams.discussions.reactions.getByOrgAndTeam_slugAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsTeamsDiscussionsReactions.GetQuery>(),
    );
  typia.assert(output);
}
