import api from "@kakasoo/github-sdk";
import { git_minus_commit } from "@kakasoo/github-sdk/lib/structures/git_minus_commit";
import typia from "typia";

export async function test_api_repos_git_commits_getByOwnerAndRepoAndCommit_sha(
  connection: api.IConnection,
) {
  const output: git_minus_commit =
    await api.functional.repos.git.commits.getByOwnerAndRepoAndCommit_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
