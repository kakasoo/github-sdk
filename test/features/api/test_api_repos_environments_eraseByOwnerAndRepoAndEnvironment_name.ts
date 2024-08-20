import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_environments_eraseByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.eraseByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
