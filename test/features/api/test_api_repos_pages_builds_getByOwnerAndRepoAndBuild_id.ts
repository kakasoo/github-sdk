import api from "@kakasoo/github-sdk";
import { page_minus_build } from "@kakasoo/github-sdk/lib/structures/page_minus_build";
import typia, { tags } from "typia";

export async function test_api_repos_pages_builds_getByOwnerAndRepoAndBuild_id(
  connection: api.IConnection,
) {
  const output: page_minus_build =
    await api.functional.repos.pages.builds.getByOwnerAndRepoAndBuild_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
