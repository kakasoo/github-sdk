import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { deployment_minus_status } from "@kakasoo/github-sdk/lib/structures/deployment_minus_status";
import typia from "typia";

export async function test_api_repos_deployments_statuses_postByOwnerAndRepoAndDeployment_id(
  connection: api.IConnection,
) {
  const output: deployment_minus_status =
    await api.functional.repos.deployments.statuses.postByOwnerAndRepoAndDeployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
