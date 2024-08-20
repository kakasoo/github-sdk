import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_role } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_role";

export async function test_api_orgs_organization_roles_getByOrgAndRole_id(
  connection: api.IConnection,
) {
  const output: organization_minus_role =
    await api.functional.orgs.organization_roles.getByOrgAndRole_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
