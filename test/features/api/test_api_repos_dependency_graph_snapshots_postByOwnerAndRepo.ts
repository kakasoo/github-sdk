import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import { snapshot } from "@kakasoo/github-sdk/lib/structures/snapshot";
import typia from "typia";

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
