import api from "@kakasoo/github-sdk";
import { issue_minus_comment } from "@kakasoo/github-sdk/lib/structures/issue_minus_comment";
import typia from "typia";

export async function test_api_repos_issues_comments_getByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: issue_minus_comment =
    await api.functional.repos.issues.comments.getByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
