import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { branch_minus_with_minus_protection } from "@ORGANIZATION/PROJECT-api/lib/structures/branch_minus_with_minus_protection";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_branches_rename_postByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: branch_minus_with_minus_protection =
    await api.functional.repos.branches.rename.postByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
