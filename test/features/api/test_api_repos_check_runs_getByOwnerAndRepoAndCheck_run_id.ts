import api from "@kakasoo/github-sdk";
import { check_minus_run } from "@kakasoo/github-sdk/lib/structures/check_minus_run";
import typia from "typia";

export async function test_api_repos_check_runs_getByOwnerAndRepoAndCheck_run_id(
  connection: api.IConnection,
) {
  const output: check_minus_run =
    await api.functional.repos.check_runs.getByOwnerAndRepoAndCheck_run_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
