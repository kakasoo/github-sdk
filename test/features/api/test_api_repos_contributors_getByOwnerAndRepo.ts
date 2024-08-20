import api from "@kakasoo/github-sdk";
import { IApiReposContributors } from "@kakasoo/github-sdk/lib/structures/IApiReposContributors";
import { contributor } from "@kakasoo/github-sdk/lib/structures/contributor";
import typia from "typia";

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
