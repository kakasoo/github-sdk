import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_deployments_eraseByOwnerAndRepoAndDeployment_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.deployments.eraseByOwnerAndRepoAndDeployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
