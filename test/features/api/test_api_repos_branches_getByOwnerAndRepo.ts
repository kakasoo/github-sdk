import api from "@kakasoo/github-sdk";
import { IApiReposBranches } from "@kakasoo/github-sdk/lib/structures/IApiReposBranches";
import { short_minus_branch } from "@kakasoo/github-sdk/lib/structures/short_minus_branch";
import typia from "typia";

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
