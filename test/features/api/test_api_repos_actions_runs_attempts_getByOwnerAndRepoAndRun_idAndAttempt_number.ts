import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { workflow_minus_run } from "@ORGANIZATION/PROJECT-api/lib/structures/workflow_minus_run";

export async function test_api_repos_actions_runs_attempts_getByOwnerAndRepoAndRun_idAndAttempt_number(
  connection: api.IConnection,
) {
  const output: workflow_minus_run =
    await api.functional.repos.actions.runs.attempts.getByOwnerAndRepoAndRun_idAndAttempt_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
