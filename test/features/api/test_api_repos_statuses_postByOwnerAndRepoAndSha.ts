import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { status } from "@ORGANIZATION/PROJECT-api/lib/structures/status";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_statuses_postByOwnerAndRepoAndSha(
  connection: api.IConnection,
) {
  const output: status =
    await api.functional.repos.statuses.postByOwnerAndRepoAndSha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
