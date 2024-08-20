import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_teams_discussions_eraseByOrgAndTeam_slugAndDiscussion_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.discussions.eraseByOrgAndTeam_slugAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
