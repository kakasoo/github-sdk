import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pending_minus_deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/pending_minus_deployment";

export async function test_api_repos_actions_runs_pending_deployments_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: pending_minus_deployment[] =
    await api.functional.repos.actions.runs.pending_deployments.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
