import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_organization_minus_permissions } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_organization_minus_permissions";

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
