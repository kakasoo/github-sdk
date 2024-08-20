import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_repository_minus_permissions } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_repository_minus_permissions";

export async function test_api_repos_actions_permissions_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: actions_minus_repository_minus_permissions =
    await api.functional.repos.actions.permissions.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
