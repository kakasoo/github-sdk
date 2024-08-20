import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { pull_minus_request_minus_review } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_review";
import typia from "typia";

export async function test_api_repos_pulls_reviews_dismissals_putByOwnerAndRepoAndPull_numberAndReview_id(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review =
    await api.functional.repos.pulls.reviews.dismissals.putByOwnerAndRepoAndPull_numberAndReview_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
