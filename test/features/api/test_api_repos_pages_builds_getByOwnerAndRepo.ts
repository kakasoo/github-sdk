import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { page_minus_build } from "@ORGANIZATION/PROJECT-api/lib/structures/page_minus_build";

export async function test_api_repos_pages_builds_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page_minus_build[] =
    await api.functional.repos.pages.builds.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
