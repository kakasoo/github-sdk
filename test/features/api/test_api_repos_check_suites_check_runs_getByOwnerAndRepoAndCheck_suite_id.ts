import api from "@kakasoo/github-sdk";
import { IApiReposCheckSuitesCheckRuns } from "@kakasoo/github-sdk/lib/structures/IApiReposCheckSuitesCheckRuns";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_check_suites_check_runs_getByOwnerAndRepoAndCheck_suite_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.check_suites.check_runs.getByOwnerAndRepoAndCheck_suite_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCheckSuitesCheckRuns.GetQuery>(),
    );
  typia.assert(output);
}
