import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pages_minus_deployment_minus_status } from "@ORGANIZATION/PROJECT-api/lib/structures/pages_minus_deployment_minus_status";

export async function test_api_repos_pages_deployments_getByOwnerAndRepoAndPages_deployment_id(
  connection: api.IConnection,
) {
  const output: pages_minus_deployment_minus_status =
    await api.functional.repos.pages.deployments.getByOwnerAndRepoAndPages_deployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
