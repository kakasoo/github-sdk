import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposCommitsCheckRuns } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCommitsCheckRuns";

export async function test_api_repos_commits_check_runs_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.commits.check_runs.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCommitsCheckRuns.GetQuery>(),
    );
  typia.assert(output);
}
