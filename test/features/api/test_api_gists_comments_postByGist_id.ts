import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gist_minus_comment } from "@ORGANIZATION/PROJECT-api/lib/structures/gist_minus_comment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_gists_comments_postByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_comment =
    await api.functional.gists.comments.postByGist_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
