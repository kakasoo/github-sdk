import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment";

export async function test_api_repos_deployments_getByOwnerAndRepoAndDeployment_id(
  connection: api.IConnection,
) {
  const output: deployment =
    await api.functional.repos.deployments.getByOwnerAndRepoAndDeployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
