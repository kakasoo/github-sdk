import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { job } from "@ORGANIZATION/PROJECT-api/lib/structures/job";

export async function test_api_repos_actions_jobs_getByOwnerAndRepoAndJob_id(
  connection: api.IConnection,
) {
  const output: job =
    await api.functional.repos.actions.jobs.getByOwnerAndRepoAndJob_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
