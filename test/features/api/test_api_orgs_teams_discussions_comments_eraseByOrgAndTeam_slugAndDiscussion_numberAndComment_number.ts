import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_teams_discussions_comments_eraseByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.discussions.comments.eraseByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
