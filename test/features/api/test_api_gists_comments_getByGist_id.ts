import api from "@kakasoo/github-sdk";
import { gist_minus_comment } from "@kakasoo/github-sdk/lib/structures/gist_minus_comment";
import typia from "typia";

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
