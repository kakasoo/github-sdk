import api from "@kakasoo/github-sdk";
import { deployment_minus_branch_minus_policy } from "@kakasoo/github-sdk/lib/structures/deployment_minus_branch_minus_policy";
import typia from "typia";

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
