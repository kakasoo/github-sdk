import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit_minus_comparison } from "@ORGANIZATION/PROJECT-api/lib/structures/commit_minus_comparison";

export async function test_api_repos_compare_getByOwnerAndRepoAndBasehead(
  connection: api.IConnection,
) {
  const output: commit_minus_comparison =
    await api.functional.repos.compare.getByOwnerAndRepoAndBasehead(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
