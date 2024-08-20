import api from "@kakasoo/github-sdk";
import { IApiReposPullsComments } from "@kakasoo/github-sdk/lib/structures/IApiReposPullsComments";
import { pull_minus_request_minus_review_minus_comment } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_review_minus_comment";
import typia from "typia";

export async function test_api_repos_pulls_comments_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_review_minus_comment[] =
    await api.functional.repos.pulls.comments.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposPullsComments.GetQuery>(),
    );
  typia.assert(output);
}
