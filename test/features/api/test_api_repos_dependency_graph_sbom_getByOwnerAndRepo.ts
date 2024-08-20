import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependency_minus_graph_minus_spdx_minus_sbom } from "@ORGANIZATION/PROJECT-api/lib/structures/dependency_minus_graph_minus_spdx_minus_sbom";

export async function test_api_repos_dependency_graph_sbom_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: dependency_minus_graph_minus_spdx_minus_sbom =
    await api.functional.repos.dependency_graph.sbom.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
