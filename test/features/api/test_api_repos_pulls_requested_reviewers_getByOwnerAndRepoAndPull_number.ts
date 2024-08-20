import api from "@kakasoo/github-sdk";
import { pull_minus_request_minus_review_minus_request } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_review_minus_request";
import typia from "typia";

export async function test_api_repos_pulls_requested_reviewers_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review_minus_request =
    await api.functional.repos.pulls.requested_reviewers.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
