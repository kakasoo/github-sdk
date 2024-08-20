import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { git_minus_tag } from "@kakasoo/github-sdk/lib/structures/git_minus_tag";
import typia from "typia";

export async function test_api_repos_git_tags_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: git_minus_tag =
    await api.functional.repos.git.tags.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
