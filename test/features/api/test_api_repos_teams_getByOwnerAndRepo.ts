import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

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
