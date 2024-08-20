import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_actions_runs_artifacts_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runs.artifacts.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
