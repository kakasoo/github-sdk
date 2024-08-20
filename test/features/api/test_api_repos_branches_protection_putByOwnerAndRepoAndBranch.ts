import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { protected_minus_branch } from "@ORGANIZATION/PROJECT-api/lib/structures/protected_minus_branch";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_branches_protection_putByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: protected_minus_branch =
    await api.functional.repos.branches.protection.putByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
