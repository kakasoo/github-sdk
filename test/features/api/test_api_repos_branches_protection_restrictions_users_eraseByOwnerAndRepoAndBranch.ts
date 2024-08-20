import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_repos_branches_protection_restrictions_users_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.repos.branches.protection.restrictions.users.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
