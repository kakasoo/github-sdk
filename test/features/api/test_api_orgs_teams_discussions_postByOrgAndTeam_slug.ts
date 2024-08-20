import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_discussion } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion";
import typia from "typia";

export async function test_api_orgs_teams_discussions_postByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: team_minus_discussion =
    await api.functional.orgs.teams.discussions.postByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
