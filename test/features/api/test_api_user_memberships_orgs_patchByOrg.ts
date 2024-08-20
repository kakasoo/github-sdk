import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { org_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/org_minus_membership";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_memberships_orgs_patchByOrg(
  connection: api.IConnection,
) {
  const output: org_minus_membership =
    await api.functional.user.memberships.orgs.patchByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
