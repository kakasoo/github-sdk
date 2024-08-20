import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { empty_minus_object } from "@ORGANIZATION/PROJECT-api/lib/structures/empty_minus_object";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_actions_jobs_rerun_postByOwnerAndRepoAndJob_id(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.actions.jobs.rerun.postByOwnerAndRepoAndJob_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
