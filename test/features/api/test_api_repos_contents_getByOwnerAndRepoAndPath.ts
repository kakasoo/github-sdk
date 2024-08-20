import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { content_minus_directory } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_directory";
import { content_minus_file } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_file";
import { content_minus_symlink } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_symlink";
import { content_minus_submodule } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_submodule";
import { IApiReposContents } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposContents";

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
