import api from "@kakasoo/github-sdk";
import { pull_minus_request_minus_review } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_review";
import typia from "typia";

export async function test_api_repos_pulls_reviews_eraseByOwnerAndRepoAndPull_numberAndReview_id(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review =
    await api.functional.repos.pulls.reviews.eraseByOwnerAndRepoAndPull_numberAndReview_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
