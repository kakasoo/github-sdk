import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_repos_teams_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: team[] = await api.functional.repos.teams.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
