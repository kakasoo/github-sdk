import api from "@kakasoo/github-sdk";
import { rule_minus_suites } from "@kakasoo/github-sdk/lib/structures/rule_minus_suites";
import typia from "typia";

export async function test_api_orgs_rulesets_rule_suites_getByOrg(
  connection: api.IConnection,
) {
  const output: rule_minus_suites =
    await api.functional.orgs.rulesets.rule_suites.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
