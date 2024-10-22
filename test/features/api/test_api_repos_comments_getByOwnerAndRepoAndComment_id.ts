import api from "@kakasoo/github-sdk";
import { commit_minus_comment } from "@kakasoo/github-sdk/lib/structures/commit_minus_comment";
import typia from "typia";

export async function test_api_repos_comments_getByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: commit_minus_comment =
    await api.functional.repos.comments.getByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
