import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { rule_minus_suites } from "@ORGANIZATION/PROJECT-api/lib/structures/rule_minus_suites";

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
