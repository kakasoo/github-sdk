import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_run } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_run";

export async function test_api_repos_check_runs_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: check_minus_run =
    await api.functional.repos.check_runs.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<any | any>(),
    );
  typia.assert(output);
}
