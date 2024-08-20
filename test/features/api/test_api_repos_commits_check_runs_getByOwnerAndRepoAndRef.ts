import api from "@kakasoo/github-sdk";
import { IApiReposCommitsCheckRuns } from "@kakasoo/github-sdk/lib/structures/IApiReposCommitsCheckRuns";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
