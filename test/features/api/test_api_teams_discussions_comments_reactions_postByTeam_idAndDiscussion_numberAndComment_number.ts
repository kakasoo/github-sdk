import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_teams_discussions_comments_reactions_postByTeam_idAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output: reaction =
    await api.functional.teams.discussions.comments.reactions.postByTeam_idAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
