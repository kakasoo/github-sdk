import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { rule_minus_suite } from "@ORGANIZATION/PROJECT-api/lib/structures/rule_minus_suite";

export async function test_api_repos_rulesets_rule_suites_getByOwnerAndRepoAndRule_suite_id(
  connection: api.IConnection,
) {
  const output: rule_minus_suite =
    await api.functional.repos.rulesets.rule_suites.getByOwnerAndRepoAndRule_suite_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
