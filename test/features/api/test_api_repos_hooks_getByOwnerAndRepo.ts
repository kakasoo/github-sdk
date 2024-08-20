import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook } from "@ORGANIZATION/PROJECT-api/lib/structures/hook";

export async function test_api_repos_hooks_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: hook[] = await api.functional.repos.hooks.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
