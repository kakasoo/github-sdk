import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_environments_deployment_branch_policies_eraseByOwnerAndRepoAndEnvironment_nameAndBranch_policy_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.deployment_branch_policies.eraseByOwnerAndRepoAndEnvironment_nameAndBranch_policy_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
