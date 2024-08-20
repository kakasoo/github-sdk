import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_workflow_minus_access_minus_to_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_workflow_minus_access_minus_to_minus_repository";

export async function test_api_repos_actions_permissions_access_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: actions_minus_workflow_minus_access_minus_to_minus_repository =
    await api.functional.repos.actions.permissions.access.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
