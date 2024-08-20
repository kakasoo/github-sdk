import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_actions_secrets_eraseByOwnerAndRepoAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.secrets.eraseByOwnerAndRepoAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
