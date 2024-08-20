import api from "@kakasoo/github-sdk";
import { team_minus_full } from "@kakasoo/github-sdk/lib/structures/team_minus_full";
import typia from "typia";

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
