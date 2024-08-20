import api from "@kakasoo/github-sdk";
import { gist_minus_simple } from "@kakasoo/github-sdk/lib/structures/gist_minus_simple";
import typia from "typia";

export async function test_api_gists_getByGist_idAndSha(
  connection: api.IConnection,
) {
  const output: gist_minus_simple =
    await api.functional.gists.getByGist_idAndSha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
