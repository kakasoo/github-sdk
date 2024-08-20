import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { rule_minus_suite } from "@ORGANIZATION/PROJECT-api/lib/structures/rule_minus_suite";

export async function test_api_orgs_rulesets_rule_suites_getByOrgAndRule_suite_id(
  connection: api.IConnection,
) {
  const output: rule_minus_suite =
    await api.functional.orgs.rulesets.rule_suites.getByOrgAndRule_suite_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
