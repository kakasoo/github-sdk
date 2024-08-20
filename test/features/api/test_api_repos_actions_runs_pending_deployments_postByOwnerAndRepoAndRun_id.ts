import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_actions_runs_pending_deployments_postByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: deployment[] =
    await api.functional.repos.actions.runs.pending_deployments.postByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
