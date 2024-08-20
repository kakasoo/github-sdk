import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { integration } from "@ORGANIZATION/PROJECT-api/lib/structures/integration";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_branches_protection_restrictions_apps_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: integration[] =
    await api.functional.repos.branches.protection.restrictions.apps.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
