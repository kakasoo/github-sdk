import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { diff_minus_entry } from "@ORGANIZATION/PROJECT-api/lib/structures/diff_minus_entry";

export async function test_api_repos_pulls_files_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: diff_minus_entry[] =
    await api.functional.repos.pulls.files.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
