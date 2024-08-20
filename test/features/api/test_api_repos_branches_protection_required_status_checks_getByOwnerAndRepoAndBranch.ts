import api from "@kakasoo/github-sdk";
import { status_minus_check_minus_policy } from "@kakasoo/github-sdk/lib/structures/status_minus_check_minus_policy";
import typia from "typia";

export async function test_api_repos_branches_protection_required_status_checks_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: status_minus_check_minus_policy =
    await api.functional.repos.branches.protection.required_status_checks.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
