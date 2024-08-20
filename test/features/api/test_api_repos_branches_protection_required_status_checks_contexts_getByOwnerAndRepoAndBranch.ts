import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_branches_protection_required_status_checks_contexts_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: string[] =
    await api.functional.repos.branches.protection.required_status_checks.contexts.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
