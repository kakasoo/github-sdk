import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposCommitsCheckSuites } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCommitsCheckSuites";

export async function test_api_repos_commits_check_suites_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.commits.check_suites.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCommitsCheckSuites.GetQuery>(),
    );
  typia.assert(output);
}
