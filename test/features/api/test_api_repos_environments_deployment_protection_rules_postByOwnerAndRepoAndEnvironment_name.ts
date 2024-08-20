import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment_minus_protection_minus_rule } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_protection_minus_rule";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_environments_deployment_protection_rules_postByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: deployment_minus_protection_minus_rule =
    await api.functional.repos.environments.deployment_protection_rules.postByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
