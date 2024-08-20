import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { protected_minus_branch_minus_pull_minus_request_minus_review } from "@ORGANIZATION/PROJECT-api/lib/structures/protected_minus_branch_minus_pull_minus_request_minus_review";

export async function test_api_repos_branches_protection_required_pull_request_reviews_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: protected_minus_branch_minus_pull_minus_request_minus_review =
    await api.functional.repos.branches.protection.required_pull_request_reviews.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
