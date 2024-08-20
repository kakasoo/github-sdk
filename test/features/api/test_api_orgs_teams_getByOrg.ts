import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

export async function test_api_orgs_teams_getByOrg(
  connection: api.IConnection,
) {
  const output: team[] = await api.functional.orgs.teams.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
