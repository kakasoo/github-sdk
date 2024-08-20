import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/issue_minus_comment";

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
