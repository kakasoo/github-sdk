import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_teams_repos_eraseByOrgAndTeam_slugAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.repos.eraseByOrgAndTeam_slugAndOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
