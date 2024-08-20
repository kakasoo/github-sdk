import api from "@kakasoo/github-sdk";
import { git_minus_tag } from "@kakasoo/github-sdk/lib/structures/git_minus_tag";
import typia from "typia";

export async function test_api_repos_git_tags_getByOwnerAndRepoAndTag_sha(
  connection: api.IConnection,
) {
  const output: git_minus_tag =
    await api.functional.repos.git.tags.getByOwnerAndRepoAndTag_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
