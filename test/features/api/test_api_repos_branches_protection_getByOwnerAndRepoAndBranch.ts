import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { branch_minus_protection } from "@ORGANIZATION/PROJECT-api/lib/structures/branch_minus_protection";

export async function test_api_repos_branches_protection_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: branch_minus_protection =
    await api.functional.repos.branches.protection.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
