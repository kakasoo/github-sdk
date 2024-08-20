import api from "@kakasoo/github-sdk";
import { actions_minus_get_minus_default_minus_workflow_minus_permissions } from "@kakasoo/github-sdk/lib/structures/actions_minus_get_minus_default_minus_workflow_minus_permissions";
import typia from "typia";

export async function test_api_orgs_actions_permissions_workflow_getByOrg(
  connection: api.IConnection,
) {
  const output: actions_minus_get_minus_default_minus_workflow_minus_permissions =
    await api.functional.orgs.actions.permissions.workflow.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
