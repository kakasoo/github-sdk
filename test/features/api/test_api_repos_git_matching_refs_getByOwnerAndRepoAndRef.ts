import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { git_minus_ref } from "@ORGANIZATION/PROJECT-api/lib/structures/git_minus_ref";

export async function test_api_repos_git_matching_refs_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: git_minus_ref[] =
    await api.functional.repos.git.matching_refs.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
