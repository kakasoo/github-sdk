import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { deployment_minus_protection_minus_rule } from "@kakasoo/github-sdk/lib/structures/deployment_minus_protection_minus_rule";
import typia from "typia";

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
