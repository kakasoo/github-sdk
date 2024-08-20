import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { empty_minus_object } from "@ORGANIZATION/PROJECT-api/lib/structures/empty_minus_object";

export async function test_api_repos_check_runs_rerequest_postByOwnerAndRepoAndCheck_run_id(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.check_runs.rerequest.postByOwnerAndRepoAndCheck_run_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
