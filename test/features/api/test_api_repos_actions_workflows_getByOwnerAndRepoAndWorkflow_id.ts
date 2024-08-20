import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { workflow } from "@ORGANIZATION/PROJECT-api/lib/structures/workflow";

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
