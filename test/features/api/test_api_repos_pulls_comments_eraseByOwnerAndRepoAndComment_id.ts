import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_pulls_comments_eraseByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.pulls.comments.eraseByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
