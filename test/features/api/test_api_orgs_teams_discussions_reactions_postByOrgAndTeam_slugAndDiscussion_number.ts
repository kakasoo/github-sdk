import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_orgs_teams_discussions_reactions_postByOrgAndTeam_slugAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: reaction =
    await api.functional.orgs.teams.discussions.reactions.postByOrgAndTeam_slugAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
