import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment_minus_branch_minus_policy } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_branch_minus_policy";

export async function test_api_repos_environments_deployment_branch_policies_getByOwnerAndRepoAndEnvironment_nameAndBranch_policy_id(
  connection: api.IConnection,
) {
  const output: deployment_minus_branch_minus_policy =
    await api.functional.repos.environments.deployment_branch_policies.getByOwnerAndRepoAndEnvironment_nameAndBranch_policy_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
