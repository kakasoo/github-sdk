import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_branches_protection_required_pull_request_reviews_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.branches.protection.required_pull_request_reviews.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
