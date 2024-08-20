import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_simple";

export async function test_api_repos_pulls_requested_reviewers_postByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple =
    await api.functional.repos.pulls.requested_reviewers.postByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<any | any>(),
    );
  typia.assert(output);
}
