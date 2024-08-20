import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { git_minus_tag } from "@ORGANIZATION/PROJECT-api/lib/structures/git_minus_tag";

export async function test_api_repos_git_tags_getByOwnerAndRepoAndTag_sha(
  connection: api.IConnection,
) {
  const output: git_minus_tag =
    await api.functional.repos.git.tags.getByOwnerAndRepoAndTag_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
