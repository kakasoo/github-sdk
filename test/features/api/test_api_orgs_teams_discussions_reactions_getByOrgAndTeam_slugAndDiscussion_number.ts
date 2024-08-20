import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiOrgsTeamsDiscussionsReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsTeamsDiscussionsReactions";

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
