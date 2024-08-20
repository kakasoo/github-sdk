import api from "@kakasoo/github-sdk";
import { branch_minus_protection } from "@kakasoo/github-sdk/lib/structures/branch_minus_protection";
import typia from "typia";

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
