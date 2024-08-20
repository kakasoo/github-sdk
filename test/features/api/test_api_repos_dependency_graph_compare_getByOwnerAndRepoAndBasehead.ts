import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependency_minus_graph_minus_diff } from "@ORGANIZATION/PROJECT-api/lib/structures/dependency_minus_graph_minus_diff";

export async function test_api_repos_dependency_graph_compare_getByOwnerAndRepoAndBasehead(
  connection: api.IConnection,
) {
  const output: dependency_minus_graph_minus_diff =
    await api.functional.repos.dependency_graph.compare.getByOwnerAndRepoAndBasehead(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
