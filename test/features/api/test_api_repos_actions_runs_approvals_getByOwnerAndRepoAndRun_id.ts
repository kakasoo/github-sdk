import api from "@kakasoo/github-sdk";
import { environment_minus_approvals } from "@kakasoo/github-sdk/lib/structures/environment_minus_approvals";
import typia from "typia";

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
