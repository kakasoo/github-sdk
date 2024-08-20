import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_variable } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_variable";

export async function test_api_repos_actions_variables_getByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output: actions_minus_variable =
    await api.functional.repos.actions.variables.getByOwnerAndRepoAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
