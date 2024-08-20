import api from "@kakasoo/github-sdk";
import { team_minus_repository } from "@kakasoo/github-sdk/lib/structures/team_minus_repository";
import typia from "typia";

export async function test_api_teams_repos_getByTeam_idAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: team_minus_repository =
    await api.functional.teams.repos.getByTeam_idAndOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
