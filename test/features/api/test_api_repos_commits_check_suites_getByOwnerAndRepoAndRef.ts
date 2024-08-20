import api from "@kakasoo/github-sdk";
import { IApiReposCommitsCheckSuites } from "@kakasoo/github-sdk/lib/structures/IApiReposCommitsCheckSuites";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
