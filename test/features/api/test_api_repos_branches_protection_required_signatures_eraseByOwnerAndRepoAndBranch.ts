import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_branches_protection_required_signatures_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.branches.protection.required_signatures.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}