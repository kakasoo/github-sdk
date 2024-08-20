import api from "@kakasoo/github-sdk";
import { rule_minus_suites } from "@kakasoo/github-sdk/lib/structures/rule_minus_suites";
import typia from "typia";

export async function test_api_repos_rulesets_rule_suites_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: rule_minus_suites =
    await api.functional.repos.rulesets.rule_suites.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
