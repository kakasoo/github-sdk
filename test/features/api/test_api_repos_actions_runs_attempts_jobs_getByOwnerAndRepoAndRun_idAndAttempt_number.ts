import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_actions_runs_attempts_jobs_getByOwnerAndRepoAndRun_idAndAttempt_number(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runs.attempts.jobs.getByOwnerAndRepoAndRun_idAndAttempt_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
