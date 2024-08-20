import api from "@kakasoo/github-sdk";
import { job } from "@kakasoo/github-sdk/lib/structures/job";
import typia from "typia";

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
