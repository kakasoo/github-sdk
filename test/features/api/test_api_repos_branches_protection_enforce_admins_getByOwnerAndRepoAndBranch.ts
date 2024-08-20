import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { protected_minus_branch_minus_admin_minus_enforced } from "@ORGANIZATION/PROJECT-api/lib/structures/protected_minus_branch_minus_admin_minus_enforced";

export async function test_api_repos_branches_protection_enforce_admins_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: protected_minus_branch_minus_admin_minus_enforced =
    await api.functional.repos.branches.protection.enforce_admins.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
