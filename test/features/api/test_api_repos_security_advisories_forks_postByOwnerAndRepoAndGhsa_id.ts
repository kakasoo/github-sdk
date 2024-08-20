import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_security_advisories_forks_postByOwnerAndRepoAndGhsa_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.security_advisories.forks.postByOwnerAndRepoAndGhsa_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
