import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit } from "@ORGANIZATION/PROJECT-api/lib/structures/commit";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_merges_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: commit = await api.functional.repos.merges.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
