import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_invitation";
import { IApiOrgsInvitations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsInvitations";

export async function test_api_orgs_invitations_getByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation[] =
    await api.functional.orgs.invitations.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsInvitations.GetQuery>(),
    );
  typia.assert(output);
}
