import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_actions_workflows_enable_putByOwnerAndRepoAndWorkflow_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.workflows.enable.putByOwnerAndRepoAndWorkflow_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
