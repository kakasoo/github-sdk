import api from "@kakasoo/github-sdk";
import { dependency_minus_graph_minus_spdx_minus_sbom } from "@kakasoo/github-sdk/lib/structures/dependency_minus_graph_minus_spdx_minus_sbom";
import typia from "typia";

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
