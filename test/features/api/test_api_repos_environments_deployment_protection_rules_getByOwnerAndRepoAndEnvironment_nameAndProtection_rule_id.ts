import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment_minus_protection_minus_rule } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_protection_minus_rule";

export async function test_api_repos_environments_deployment_protection_rules_getByOwnerAndRepoAndEnvironment_nameAndProtection_rule_id(
  connection: api.IConnection,
) {
  const output: deployment_minus_protection_minus_rule =
    await api.functional.repos.environments.deployment_protection_rules.getByOwnerAndRepoAndEnvironment_nameAndProtection_rule_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
