import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_repos_branches_protection_required_status_checks_contexts_eraseByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: string[] =
    await api.functional.repos.branches.protection.required_status_checks.contexts.eraseByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
