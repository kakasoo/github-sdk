import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { view_minus_traffic } from "@ORGANIZATION/PROJECT-api/lib/structures/view_minus_traffic";

export async function test_api_repos_traffic_views_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: view_minus_traffic =
    await api.functional.repos.traffic.views.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
