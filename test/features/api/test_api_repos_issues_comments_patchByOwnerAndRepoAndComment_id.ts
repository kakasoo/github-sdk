import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { issue_minus_comment } from "@kakasoo/github-sdk/lib/structures/issue_minus_comment";
import typia from "typia";

export async function test_api_repos_issues_comments_patchByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: issue_minus_comment =
    await api.functional.repos.issues.comments.patchByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
