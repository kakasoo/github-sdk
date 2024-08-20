import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_branches_protection_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.branches.protection.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
