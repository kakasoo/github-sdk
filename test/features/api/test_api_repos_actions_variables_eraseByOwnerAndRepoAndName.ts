import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_actions_variables_eraseByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.variables.eraseByOwnerAndRepoAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
