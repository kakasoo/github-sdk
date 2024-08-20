import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_workflow_minus_access_minus_to_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_workflow_minus_access_minus_to_minus_repository";

export async function test_api_repos_actions_permissions_access_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.permissions.access.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<actions_minus_workflow_minus_access_minus_to_minus_repository>(),
    );
  typia.assert(output);
}
