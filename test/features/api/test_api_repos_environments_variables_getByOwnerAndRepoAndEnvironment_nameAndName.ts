import api from "@kakasoo/github-sdk";
import { actions_minus_variable } from "@kakasoo/github-sdk/lib/structures/actions_minus_variable";
import typia from "typia";

export async function test_api_repos_environments_variables_getByOwnerAndRepoAndEnvironment_nameAndName(
  connection: api.IConnection,
) {
  const output: actions_minus_variable =
    await api.functional.repos.environments.variables.getByOwnerAndRepoAndEnvironment_nameAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
