import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/commit_minus_comment";

export async function test_api_repos_comments_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: commit_minus_comment[] =
    await api.functional.repos.comments.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
