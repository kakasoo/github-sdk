import api from "@kakasoo/github-sdk";
import { actions_minus_set_minus_default_minus_workflow_minus_permissions } from "@kakasoo/github-sdk/lib/structures/actions_minus_set_minus_default_minus_workflow_minus_permissions";
import typia from "typia";

export async function test_api_orgs_actions_permissions_workflow_putByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.permissions.workflow.putByOrg(
      connection,
      typia.random<string>(),
      typia.random<actions_minus_set_minus_default_minus_workflow_minus_permissions>(),
    );
  typia.assert(output);
}
