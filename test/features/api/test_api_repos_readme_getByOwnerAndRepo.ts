import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { content_minus_file } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_file";
import { IApiReposReadme } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposReadme";

export async function test_api_repos_readme_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: content_minus_file =
    await api.functional.repos.readme.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposReadme.GetQuery>(),
    );
  typia.assert(output);
}
