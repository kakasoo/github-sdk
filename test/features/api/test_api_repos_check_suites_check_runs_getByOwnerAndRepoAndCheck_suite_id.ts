import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposCheckSuitesCheckRuns } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCheckSuitesCheckRuns";

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
