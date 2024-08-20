import api from "@kakasoo/github-sdk";
import { gist_minus_commit } from "@kakasoo/github-sdk/lib/structures/gist_minus_commit";
import typia from "typia";

export async function test_api_gists_commits_getByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_commit[] =
    await api.functional.gists.commits.getByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
