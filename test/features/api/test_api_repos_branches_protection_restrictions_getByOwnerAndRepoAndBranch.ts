import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { branch_minus_restriction_minus_policy } from "@ORGANIZATION/PROJECT-api/lib/structures/branch_minus_restriction_minus_policy";

export async function test_api_repos_branches_protection_restrictions_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: branch_minus_restriction_minus_policy =
    await api.functional.repos.branches.protection.restrictions.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
