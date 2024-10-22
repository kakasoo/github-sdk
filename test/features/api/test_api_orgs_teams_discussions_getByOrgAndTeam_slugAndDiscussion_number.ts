import api from "@kakasoo/github-sdk";
import { team_minus_discussion } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion";
import typia from "typia";

export async function test_api_orgs_teams_discussions_getByOrgAndTeam_slugAndDiscussion_number(
  connection: api.IConnection,
) {
  const output: team_minus_discussion =
    await api.functional.orgs.teams.discussions.getByOrgAndTeam_slugAndDiscussion_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
