import api from "@kakasoo/github-sdk";
import { workflow_minus_run } from "@kakasoo/github-sdk/lib/structures/workflow_minus_run";
import typia from "typia";

export async function test_api_repos_actions_runs_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: workflow_minus_run =
    await api.functional.repos.actions.runs.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
