import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { merged_minus_upstream } from "@ORGANIZATION/PROJECT-api/lib/structures/merged_minus_upstream";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_merge_upstream_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: merged_minus_upstream =
    await api.functional.repos.merge_upstream.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
