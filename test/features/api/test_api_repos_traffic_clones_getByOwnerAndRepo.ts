import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { clone_minus_traffic } from "@ORGANIZATION/PROJECT-api/lib/structures/clone_minus_traffic";

export async function test_api_repos_traffic_clones_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: clone_minus_traffic =
    await api.functional.repos.traffic.clones.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
