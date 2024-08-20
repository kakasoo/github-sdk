import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_teams_repos_eraseByTeam_idAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.repos.eraseByTeam_idAndOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
