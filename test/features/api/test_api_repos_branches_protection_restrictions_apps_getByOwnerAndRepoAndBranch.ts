import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { integration } from "@ORGANIZATION/PROJECT-api/lib/structures/integration";

export async function test_api_repos_branches_protection_restrictions_apps_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: integration[] =
    await api.functional.repos.branches.protection.restrictions.apps.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
