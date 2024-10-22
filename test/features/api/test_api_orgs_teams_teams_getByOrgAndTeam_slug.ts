import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

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
