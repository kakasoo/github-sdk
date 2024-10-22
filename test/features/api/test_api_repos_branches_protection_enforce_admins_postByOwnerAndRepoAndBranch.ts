import api from "@kakasoo/github-sdk";
import { protected_minus_branch_minus_admin_minus_enforced } from "@kakasoo/github-sdk/lib/structures/protected_minus_branch_minus_admin_minus_enforced";
import typia from "typia";

export async function test_api_repos_branches_protection_enforce_admins_postByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: protected_minus_branch_minus_admin_minus_enforced =
    await api.functional.repos.branches.protection.enforce_admins.postByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
