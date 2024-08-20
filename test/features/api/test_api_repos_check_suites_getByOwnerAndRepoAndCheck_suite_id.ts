import api from "@kakasoo/github-sdk";
import { check_minus_suite } from "@kakasoo/github-sdk/lib/structures/check_minus_suite";
import typia from "typia";

export async function test_api_repos_check_suites_getByOwnerAndRepoAndCheck_suite_id(
  connection: api.IConnection,
) {
  const output: check_minus_suite =
    await api.functional.repos.check_suites.getByOwnerAndRepoAndCheck_suite_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
