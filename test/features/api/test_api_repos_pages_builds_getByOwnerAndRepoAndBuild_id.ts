import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { page_minus_build } from "@ORGANIZATION/PROJECT-api/lib/structures/page_minus_build";

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
