import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_suite } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_suite";

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
