import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_suite } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_suite";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_check_suites_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: check_minus_suite =
    await api.functional.repos.check_suites.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}