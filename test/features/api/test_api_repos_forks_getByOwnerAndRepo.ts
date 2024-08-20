import api from "@kakasoo/github-sdk";
import { IApiReposForks } from "@kakasoo/github-sdk/lib/structures/IApiReposForks";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia from "typia";

export async function test_api_repos_forks_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.repos.forks.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposForks.GetQuery>(),
    );
  typia.assert(output);
}
