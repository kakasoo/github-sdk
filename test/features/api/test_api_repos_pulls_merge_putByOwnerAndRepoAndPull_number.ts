import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_merge_minus_result } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_merge_minus_result";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_pulls_merge_putByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_merge_minus_result =
    await api.functional.repos.pulls.merge.putByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
