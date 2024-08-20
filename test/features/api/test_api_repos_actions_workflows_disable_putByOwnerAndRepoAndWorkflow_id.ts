import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_actions_workflows_disable_putByOwnerAndRepoAndWorkflow_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.workflows.disable.putByOwnerAndRepoAndWorkflow_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
