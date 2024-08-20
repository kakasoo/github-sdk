import api from "@kakasoo/github-sdk";
import { repository_minus_advisory } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory";
import { repository_minus_advisory_minus_update } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory_minus_update";
import typia from "typia";

export async function test_api_repos_security_advisories_patchByOwnerAndRepoAndGhsa_id(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.patchByOwnerAndRepoAndGhsa_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<repository_minus_advisory_minus_update>(),
    );
  typia.assert(output);
}
