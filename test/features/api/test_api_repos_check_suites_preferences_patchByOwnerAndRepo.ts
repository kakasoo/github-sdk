import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_suite_minus_preference } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_suite_minus_preference";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
