import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/issue_minus_comment";
import { IApiReposIssuesComments } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposIssuesComments";

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
