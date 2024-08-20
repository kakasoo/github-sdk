import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pages_minus_health_minus_check } from "@ORGANIZATION/PROJECT-api/lib/structures/pages_minus_health_minus_check";

export async function test_api_repos_pages_health_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pages_minus_health_minus_check =
    await api.functional.repos.pages.health.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
