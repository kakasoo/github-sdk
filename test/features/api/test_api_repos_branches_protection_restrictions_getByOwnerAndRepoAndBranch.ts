import api from "@kakasoo/github-sdk";
import { branch_minus_restriction_minus_policy } from "@kakasoo/github-sdk/lib/structures/branch_minus_restriction_minus_policy";
import typia from "typia";

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
