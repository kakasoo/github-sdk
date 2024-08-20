import api from "@kakasoo/github-sdk";
import { IApiReposDeployments } from "@kakasoo/github-sdk/lib/structures/IApiReposDeployments";
import { deployment } from "@kakasoo/github-sdk/lib/structures/deployment";
import typia from "typia";

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
