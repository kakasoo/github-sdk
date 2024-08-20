import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_environments_variables_patchByOwnerAndRepoAndEnvironment_nameAndName(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.environments.variables.patchByOwnerAndRepoAndEnvironment_nameAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
