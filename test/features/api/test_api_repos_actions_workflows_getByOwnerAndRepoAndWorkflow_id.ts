import api from "@kakasoo/github-sdk";
import { workflow } from "@kakasoo/github-sdk/lib/structures/workflow";
import typia from "typia";

export async function test_api_repos_actions_workflows_getByOwnerAndRepoAndWorkflow_id(
  connection: api.IConnection,
) {
  const output: workflow =
    await api.functional.repos.actions.workflows.getByOwnerAndRepoAndWorkflow_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
