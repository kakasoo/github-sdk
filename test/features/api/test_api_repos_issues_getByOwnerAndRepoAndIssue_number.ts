import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";

export async function test_api_repos_issues_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: issue =
    await api.functional.repos.issues.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
