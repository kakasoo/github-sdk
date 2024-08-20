import api from "@kakasoo/github-sdk";
import { repository_minus_advisory } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory";
import typia from "typia";

export async function test_api_repos_security_advisories_getByOwnerAndRepoAndGhsa_id(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.getByOwnerAndRepoAndGhsa_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
