import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_teams_discussions_reactions_eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.discussions.reactions.eraseByOrgAndTeam_slugAndDiscussion_numberAndReaction_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
