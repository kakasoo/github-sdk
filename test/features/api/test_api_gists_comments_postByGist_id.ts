import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { gist_minus_comment } from "@kakasoo/github-sdk/lib/structures/gist_minus_comment";
import typia from "typia";

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
