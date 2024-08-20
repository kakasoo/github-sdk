import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { page_minus_build_minus_status } from "@ORGANIZATION/PROJECT-api/lib/structures/page_minus_build_minus_status";

export async function test_api_repos_pages_builds_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page_minus_build_minus_status =
    await api.functional.repos.pages.builds.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
