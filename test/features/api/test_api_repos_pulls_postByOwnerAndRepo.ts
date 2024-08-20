import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_pulls_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pull_minus_request =
    await api.functional.repos.pulls.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
