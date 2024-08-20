import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { content_minus_traffic } from "@ORGANIZATION/PROJECT-api/lib/structures/content_minus_traffic";

export async function test_api_repos_traffic_popular_paths_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: content_minus_traffic[] =
    await api.functional.repos.traffic.popular.paths.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
