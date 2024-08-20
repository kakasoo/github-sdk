import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposActionsRunsJobs } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposActionsRunsJobs";

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
