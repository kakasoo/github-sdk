import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { file_minus_commit } from "@ORGANIZATION/PROJECT-api/lib/structures/file_minus_commit";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_contents_eraseByOwnerAndRepoAndPath(
  connection: api.IConnection,
) {
  const output: file_minus_commit =
    await api.functional.repos.contents.eraseByOwnerAndRepoAndPath(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
