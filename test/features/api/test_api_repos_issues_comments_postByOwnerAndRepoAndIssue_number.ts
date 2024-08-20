import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/issue_minus_comment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_issues_comments_postByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: issue_minus_comment =
    await api.functional.repos.issues.comments.postByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
