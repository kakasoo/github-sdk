import api from "@kakasoo/github-sdk";
import { IApiReposReadme } from "@kakasoo/github-sdk/lib/structures/IApiReposReadme";
import { content_minus_file } from "@kakasoo/github-sdk/lib/structures/content_minus_file";
import typia from "typia";

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
