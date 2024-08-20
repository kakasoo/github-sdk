import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_teams_discussions_reactions_postByTeam_idAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: reaction =
    await api.functional.teams.discussions.reactions.postByTeam_idAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
