import api from "@kakasoo/github-sdk";
import { repository_minus_rule_minus_detailed } from "@kakasoo/github-sdk/lib/structures/repository_minus_rule_minus_detailed";
import typia from "typia";

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
