import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_environments_secrets_eraseByOwnerAndRepoAndEnvironment_nameAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.secrets.eraseByOwnerAndRepoAndEnvironment_nameAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
