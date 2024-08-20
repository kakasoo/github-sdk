import api from "@kakasoo/github-sdk";
import { commit } from "@kakasoo/github-sdk/lib/structures/commit";
import typia from "typia";

export async function test_api_repos_pulls_commits_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: commit[] =
    await api.functional.repos.pulls.commits.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
