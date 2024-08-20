import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/commit_minus_comment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_comments_patchByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: commit_minus_comment =
    await api.functional.repos.comments.patchByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
