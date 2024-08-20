import api from "@kakasoo/github-sdk";
import { IApiReposIssuesComments } from "@kakasoo/github-sdk/lib/structures/IApiReposIssuesComments";
import { issue_minus_comment } from "@kakasoo/github-sdk/lib/structures/issue_minus_comment";
import typia from "typia";

export async function test_api_repos_issues_comments_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: issue_minus_comment[] =
    await api.functional.repos.issues.comments.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposIssuesComments.GetQuery>(),
    );
  typia.assert(output);
}
