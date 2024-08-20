import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { protected_minus_branch_minus_pull_minus_request_minus_review } from "@kakasoo/github-sdk/lib/structures/protected_minus_branch_minus_pull_minus_request_minus_review";
import typia from "typia";

export async function test_api_repos_branches_protection_required_pull_request_reviews_patchByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: protected_minus_branch_minus_pull_minus_request_minus_review =
    await api.functional.repos.branches.protection.required_pull_request_reviews.patchByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
