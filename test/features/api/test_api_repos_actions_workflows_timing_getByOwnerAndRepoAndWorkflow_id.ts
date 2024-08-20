import api from "@kakasoo/github-sdk";
import { workflow_minus_usage } from "@kakasoo/github-sdk/lib/structures/workflow_minus_usage";
import typia from "typia";

export async function test_api_repos_actions_workflows_timing_getByOwnerAndRepoAndWorkflow_id(
  connection: api.IConnection,
) {
  const output: workflow_minus_usage =
    await api.functional.repos.actions.workflows.timing.getByOwnerAndRepoAndWorkflow_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
