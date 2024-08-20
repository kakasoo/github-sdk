import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { snapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/snapshot";

export async function test_api_repos_dependency_graph_snapshots_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.dependency_graph.snapshots.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<snapshot>(),
    );
  typia.assert(output);
}
