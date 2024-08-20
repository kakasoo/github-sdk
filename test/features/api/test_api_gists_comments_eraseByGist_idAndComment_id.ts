import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_gists_comments_eraseByGist_idAndComment_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.gists.comments.eraseByGist_idAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
