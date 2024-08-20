import api from "@kakasoo/github-sdk";
import { review_minus_comment } from "@kakasoo/github-sdk/lib/structures/review_minus_comment";
import typia from "typia";

export async function test_api_repos_pulls_reviews_comments_getByOwnerAndRepoAndPull_numberAndReview_id(
  connection: api.IConnection,
) {
  const output: review_minus_comment[] =
    await api.functional.repos.pulls.reviews.comments.getByOwnerAndRepoAndPull_numberAndReview_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
