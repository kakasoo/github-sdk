import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { environment } from "@ORGANIZATION/PROJECT-api/lib/structures/environment";

export async function test_api_repos_environments_getByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: environment =
    await api.functional.repos.environments.getByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
