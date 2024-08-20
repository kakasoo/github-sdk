import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_environments_deployment_branch_policies_getByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.environments.deployment_branch_policies.getByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
