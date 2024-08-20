import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_review_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_review_minus_comment";
import { IApiReposPullsComments } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposPullsComments";

export async function test_api_repos_pulls_comments_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review_minus_comment[] =
    await api.functional.repos.pulls.comments.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposPullsComments.GetQuery>(),
    );
  typia.assert(output);
}
