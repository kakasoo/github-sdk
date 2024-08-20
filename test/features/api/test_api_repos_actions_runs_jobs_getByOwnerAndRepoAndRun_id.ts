import api from "@kakasoo/github-sdk";
import { IApiReposActionsRunsJobs } from "@kakasoo/github-sdk/lib/structures/IApiReposActionsRunsJobs";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_actions_runs_jobs_getByOwnerAndRepoAndRun_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runs.jobs.getByOwnerAndRepoAndRun_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposActionsRunsJobs.GetQuery>(),
    );
  typia.assert(output);
}
