import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_actions_runs_force_cancel_postByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.runs.force_cancel.postByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}