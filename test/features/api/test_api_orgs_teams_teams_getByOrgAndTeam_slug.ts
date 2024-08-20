import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team } from "@ORGANIZATION/PROJECT-api/lib/structures/team";

export async function test_api_orgs_teams_teams_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: team[] =
    await api.functional.orgs.teams.teams.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
