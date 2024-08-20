import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gist_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/gist_minus_comment";

export async function test_api_gists_comments_getByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_comment[] =
    await api.functional.gists.comments.getByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
