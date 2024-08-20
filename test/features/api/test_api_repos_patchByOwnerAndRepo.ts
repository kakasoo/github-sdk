import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/full_minus_repository";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_patchByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.repos.patchByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
