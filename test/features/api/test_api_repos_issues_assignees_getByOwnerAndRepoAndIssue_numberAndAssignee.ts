import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_issues_assignees_getByOwnerAndRepoAndIssue_numberAndAssignee(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.issues.assignees.getByOwnerAndRepoAndIssue_numberAndAssignee(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
