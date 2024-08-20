import api from "@kakasoo/github-sdk";
import { pull_minus_request_minus_simple } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_simple";
import typia from "typia";

export async function test_api_repos_commits_pulls_getByOwnerAndRepoAndCommit_sha(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple[] =
    await api.functional.repos.commits.pulls.getByOwnerAndRepoAndCommit_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
