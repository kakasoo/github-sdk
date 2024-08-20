import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { commit_minus_comment } from "@kakasoo/github-sdk/lib/structures/commit_minus_comment";
import typia from "typia";

export async function test_api_repos_commits_comments_postByOwnerAndRepoAndCommit_sha(
  connection: api.IConnection,
) {
  const output: commit_minus_comment =
    await api.functional.repos.commits.comments.postByOwnerAndRepoAndCommit_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
