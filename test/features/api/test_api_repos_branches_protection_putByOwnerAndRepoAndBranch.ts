import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { protected_minus_branch } from "@kakasoo/github-sdk/lib/structures/protected_minus_branch";
import typia from "typia";

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
