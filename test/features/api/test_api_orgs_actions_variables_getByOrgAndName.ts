import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_actions_minus_variable } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_actions_minus_variable";

export async function test_api_orgs_actions_variables_getByOrgAndName(
  connection: api.IConnection,
) {
  const output: organization_minus_actions_minus_variable =
    await api.functional.orgs.actions.variables.getByOrgAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
