import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { org_minus_membership } from "@ORGANIZATION/PROJECT-api/lib/structures/org_minus_membership";
import { IApiUserMembershipsOrgs } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserMembershipsOrgs";

export async function test_api_user_memberships_orgs_get(
  connection: api.IConnection,
) {
  const output: org_minus_membership[] =
    await api.functional.user.memberships.orgs.get(
      connection,
      typia.random<IApiUserMembershipsOrgs.GetQuery>(),
    );
  typia.assert(output);
}
