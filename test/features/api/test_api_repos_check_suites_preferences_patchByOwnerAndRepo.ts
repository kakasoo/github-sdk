import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { check_minus_suite_minus_preference } from "@kakasoo/github-sdk/lib/structures/check_minus_suite_minus_preference";
import typia from "typia";

export async function test_api_repos_check_suites_preferences_patchByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: check_minus_suite_minus_preference =
    await api.functional.repos.check_suites.preferences.patchByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
