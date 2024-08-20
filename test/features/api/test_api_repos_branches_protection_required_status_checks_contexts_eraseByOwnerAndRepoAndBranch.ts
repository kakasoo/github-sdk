import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
