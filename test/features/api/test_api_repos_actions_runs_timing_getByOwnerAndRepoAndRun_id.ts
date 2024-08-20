import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { workflow_minus_run_minus_usage } from "@ORGANIZATION/PROJECT-api/lib/structures/workflow_minus_run_minus_usage";

export async function test_api_repos_actions_runs_timing_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: workflow_minus_run_minus_usage =
    await api.functional.repos.actions.runs.timing.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
