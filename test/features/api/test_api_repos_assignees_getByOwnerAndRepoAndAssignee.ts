import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_assignees_getByOwnerAndRepoAndAssignee(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.assignees.getByOwnerAndRepoAndAssignee(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
