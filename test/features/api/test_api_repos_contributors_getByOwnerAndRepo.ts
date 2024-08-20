import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { contributor } from "@ORGANIZATION/PROJECT-api/lib/structures/contributor";
import { IApiReposContributors } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposContributors";

export async function test_api_repos_contributors_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: contributor[] =
    await api.functional.repos.contributors.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposContributors.GetQuery>(),
    );
  typia.assert(output);
}
