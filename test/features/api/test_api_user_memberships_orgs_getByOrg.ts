import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { org_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/org_minus_membership";

export async function test_api_user_memberships_orgs_getByOrg(
  connection: api.IConnection,
) {
  const output: org_minus_membership =
    await api.functional.user.memberships.orgs.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
