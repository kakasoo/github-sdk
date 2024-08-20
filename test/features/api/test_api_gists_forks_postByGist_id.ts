import api from "@kakasoo/github-sdk";
import { base_minus_gist } from "@kakasoo/github-sdk/lib/structures/base_minus_gist";
import typia from "typia";

export async function test_api_gists_forks_postByGist_id(
  connection: api.IConnection,
) {
  const output: base_minus_gist =
    await api.functional.gists.forks.postByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
