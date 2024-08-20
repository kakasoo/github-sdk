import api from "@kakasoo/github-sdk";
import { pending_minus_deployment } from "@kakasoo/github-sdk/lib/structures/pending_minus_deployment";
import typia from "typia";

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
