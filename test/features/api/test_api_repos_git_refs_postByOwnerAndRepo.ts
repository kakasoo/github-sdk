import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { git_minus_ref } from "@ORGANIZATION/PROJECT-api/lib/structures/git_minus_ref";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_git_refs_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: git_minus_ref =
    await api.functional.repos.git.refs.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
