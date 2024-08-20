import api from "@kakasoo/github-sdk";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import typia from "typia";

export async function test_api_repos_actions_runs_approve_postByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.actions.runs.approve.postByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
