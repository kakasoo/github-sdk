import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_collaborators_getByOwnerAndRepoAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.collaborators.getByOwnerAndRepoAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
