import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
