import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
