import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_issues_comments_eraseByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.issues.comments.eraseByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
