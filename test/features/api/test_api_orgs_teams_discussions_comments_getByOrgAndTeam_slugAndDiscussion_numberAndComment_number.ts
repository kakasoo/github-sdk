import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_discussion_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_discussion_minus_comment";

export async function test_api_orgs_teams_discussions_comments_getByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output: team_minus_discussion_minus_comment =
    await api.functional.orgs.teams.discussions.comments.getByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
