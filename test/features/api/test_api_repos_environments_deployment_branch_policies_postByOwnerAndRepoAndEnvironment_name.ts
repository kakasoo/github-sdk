import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment_minus_branch_minus_policy } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_branch_minus_policy";
import { deployment_minus_branch_minus_policy_minus_name_minus_pattern_minus_with_minus_type } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_branch_minus_policy_minus_name_minus_pattern_minus_with_minus_type";

export async function test_api_repos_environments_deployment_branch_policies_postByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: deployment_minus_branch_minus_policy =
    await api.functional.repos.environments.deployment_branch_policies.postByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<deployment_minus_branch_minus_policy_minus_name_minus_pattern_minus_with_minus_type>(),
    );
  typia.assert(output);
}
