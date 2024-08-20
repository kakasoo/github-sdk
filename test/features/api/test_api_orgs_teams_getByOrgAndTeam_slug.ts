import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_full";

export async function test_api_orgs_teams_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: team_minus_full =
    await api.functional.orgs.teams.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
