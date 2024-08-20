import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/full_minus_repository";

export async function test_api_repos_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.repos.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
