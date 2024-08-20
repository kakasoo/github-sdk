import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_set_minus_default_minus_workflow_minus_permissions } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_set_minus_default_minus_workflow_minus_permissions";

export async function test_api_repos_actions_permissions_workflow_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.permissions.workflow.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<actions_minus_set_minus_default_minus_workflow_minus_permissions>(),
    );
  typia.assert(output);
}
