import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_rule_minus_detailed } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_rule_minus_detailed";

export async function test_api_repos_rules_branches_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: repository_minus_rule_minus_detailed[] =
    await api.functional.repos.rules.branches.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
