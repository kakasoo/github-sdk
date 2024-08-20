import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment";
import { IApiReposDeployments } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposDeployments";

export async function test_api_repos_deployments_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: deployment[] =
    await api.functional.repos.deployments.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposDeployments.GetQuery>(),
    );
  typia.assert(output);
}
