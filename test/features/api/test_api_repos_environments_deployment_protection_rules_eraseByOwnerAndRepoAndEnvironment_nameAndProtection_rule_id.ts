import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_environments_deployment_protection_rules_eraseByOwnerAndRepoAndEnvironment_nameAndProtection_rule_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.deployment_protection_rules.eraseByOwnerAndRepoAndEnvironment_nameAndProtection_rule_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
