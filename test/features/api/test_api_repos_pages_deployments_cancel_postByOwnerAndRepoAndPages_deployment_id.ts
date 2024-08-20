import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_pages_deployments_cancel_postByOwnerAndRepoAndPages_deployment_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.pages.deployments.cancel.postByOwnerAndRepoAndPages_deployment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
