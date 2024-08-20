import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_labels_eraseByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output = await api.functional.repos.labels.eraseByOwnerAndRepoAndName(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
