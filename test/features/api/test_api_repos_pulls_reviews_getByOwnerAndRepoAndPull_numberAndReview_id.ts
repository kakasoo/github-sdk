import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_review } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_review";

export async function test_api_repos_pulls_reviews_getByOwnerAndRepoAndPull_numberAndReview_id(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review =
    await api.functional.repos.pulls.reviews.getByOwnerAndRepoAndPull_numberAndReview_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
