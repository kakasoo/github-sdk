import api from "@kakasoo/github-sdk";
import { actions_minus_set_minus_default_minus_workflow_minus_permissions } from "@kakasoo/github-sdk/lib/structures/actions_minus_set_minus_default_minus_workflow_minus_permissions";
import typia from "typia";

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
