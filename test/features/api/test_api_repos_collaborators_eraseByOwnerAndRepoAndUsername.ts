import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_collaborators_eraseByOwnerAndRepoAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.collaborators.eraseByOwnerAndRepoAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
