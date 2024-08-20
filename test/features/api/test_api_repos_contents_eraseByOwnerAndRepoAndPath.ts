import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { file_minus_commit } from "@kakasoo/github-sdk/lib/structures/file_minus_commit";
import typia from "typia";

export async function test_api_repos_contents_eraseByOwnerAndRepoAndPath(
  connection: api.IConnection,
) {
  const output: file_minus_commit =
    await api.functional.repos.contents.eraseByOwnerAndRepoAndPath(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
