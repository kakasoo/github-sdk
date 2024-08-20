import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { environment } from "@ORGANIZATION/PROJECT-api/lib/structures/environment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_environments_putByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: environment =
    await api.functional.repos.environments.putByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
