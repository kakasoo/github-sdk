import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_environments_variables_eraseByOwnerAndRepoAndEnvironment_nameAndName(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.variables.eraseByOwnerAndRepoAndEnvironment_nameAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
