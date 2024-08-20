import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_simple";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_pulls_requested_reviewers_eraseByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple =
    await api.functional.repos.pulls.requested_reviewers.eraseByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
