import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_teams_eraseByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.teams.eraseByOrgAndTeam_slug(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
