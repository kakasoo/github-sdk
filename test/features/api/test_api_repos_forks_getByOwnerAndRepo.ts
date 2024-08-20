import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";
import { IApiReposForks } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposForks";

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
