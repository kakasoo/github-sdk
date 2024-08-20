import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_teams_repos_putByOrgAndTeam_slugAndOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.teams.repos.putByOrgAndTeam_slugAndOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
