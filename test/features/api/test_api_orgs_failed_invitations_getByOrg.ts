import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_invitation";

export async function test_api_orgs_failed_invitations_getByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation[] =
    await api.functional.orgs.failed_invitations.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
