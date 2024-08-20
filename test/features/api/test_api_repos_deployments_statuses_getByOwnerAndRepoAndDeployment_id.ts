import api from "@kakasoo/github-sdk";
import { deployment_minus_status } from "@kakasoo/github-sdk/lib/structures/deployment_minus_status";
import typia from "typia";

export async function test_api_repos_deployments_statuses_getByOwnerAndRepoAndDeployment_id(
  connection: api.IConnection,
) {
  const output: deployment_minus_status[] =
    await api.functional.repos.deployments.statuses.getByOwnerAndRepoAndDeployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
