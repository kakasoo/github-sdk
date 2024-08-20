import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";

export async function test_api_orgs_teams_repos_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.teams.repos.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
