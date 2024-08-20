import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_annotation } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_annotation";

export async function test_api_repos_check_runs_annotations_getByOwnerAndRepoAndCheck_run_id(
  connection: api.IConnection,
) {
  const output: check_minus_annotation[] =
    await api.functional.repos.check_runs.annotations.getByOwnerAndRepoAndCheck_run_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
