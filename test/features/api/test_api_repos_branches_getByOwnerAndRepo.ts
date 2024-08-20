import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { short_minus_branch } from "@ORGANIZATION/PROJECT-api/lib/structures/short_minus_branch";
import { IApiReposBranches } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposBranches";

export async function test_api_repos_branches_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: short_minus_branch[] =
    await api.functional.repos.branches.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposBranches.GetQuery>(),
    );
  typia.assert(output);
}
