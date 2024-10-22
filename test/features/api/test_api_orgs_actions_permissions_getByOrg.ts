import api from "@kakasoo/github-sdk";
import { actions_minus_organization_minus_permissions } from "@kakasoo/github-sdk/lib/structures/actions_minus_organization_minus_permissions";
import typia from "typia";

export async function test_api_orgs_actions_permissions_getByOrg(
  connection: api.IConnection,
) {
  const output: actions_minus_organization_minus_permissions =
    await api.functional.orgs.actions.permissions.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
