import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_teams_repos_putByTeam_idAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.teams.repos.putByTeam_idAndOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
