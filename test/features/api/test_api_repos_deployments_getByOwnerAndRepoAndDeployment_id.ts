import api from "@kakasoo/github-sdk";
import { deployment } from "@kakasoo/github-sdk/lib/structures/deployment";
import typia from "typia";

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
