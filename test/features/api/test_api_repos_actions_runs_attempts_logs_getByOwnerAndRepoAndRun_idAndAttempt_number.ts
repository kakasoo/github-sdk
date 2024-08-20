import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_actions_runs_attempts_logs_getByOwnerAndRepoAndRun_idAndAttempt_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.runs.attempts.logs.getByOwnerAndRepoAndRun_idAndAttempt_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
