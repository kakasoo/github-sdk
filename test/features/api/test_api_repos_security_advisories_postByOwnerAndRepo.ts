import api from "@kakasoo/github-sdk";
import { repository_minus_advisory } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory";
import { repository_minus_advisory_minus_create } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory_minus_create";
import typia from "typia";

export async function test_api_repos_security_advisories_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<repository_minus_advisory_minus_create>(),
    );
  typia.assert(output);
}
