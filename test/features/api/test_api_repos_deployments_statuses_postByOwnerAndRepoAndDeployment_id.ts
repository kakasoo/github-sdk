import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment_minus_status } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment_minus_status";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
