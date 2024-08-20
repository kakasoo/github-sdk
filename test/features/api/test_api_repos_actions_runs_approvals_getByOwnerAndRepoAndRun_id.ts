import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { environment_minus_approvals } from "@ORGANIZATION/PROJECT-api/lib/structures/environment_minus_approvals";

export async function test_api_repos_actions_runs_approvals_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: environment_minus_approvals[] =
    await api.functional.repos.actions.runs.approvals.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
