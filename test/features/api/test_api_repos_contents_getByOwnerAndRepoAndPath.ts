import api from "@kakasoo/github-sdk";
import { IApiReposContents } from "@kakasoo/github-sdk/lib/structures/IApiReposContents";
import { content_minus_directory } from "@kakasoo/github-sdk/lib/structures/content_minus_directory";
import { content_minus_file } from "@kakasoo/github-sdk/lib/structures/content_minus_file";
import { content_minus_submodule } from "@kakasoo/github-sdk/lib/structures/content_minus_submodule";
import { content_minus_symlink } from "@kakasoo/github-sdk/lib/structures/content_minus_symlink";
import typia from "typia";

export async function test_api_repos_contents_getByOwnerAndRepoAndPath(
  connection: api.IConnection,
) {
  const output:
    | content_minus_directory
    | content_minus_file
    | content_minus_symlink
    | content_minus_submodule =
    await api.functional.repos.contents.getByOwnerAndRepoAndPath(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposContents.GetQuery>(),
    );
  typia.assert(output);
}
