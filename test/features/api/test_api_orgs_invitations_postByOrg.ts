import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_invitation";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_invitations_postByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation =
    await api.functional.orgs.invitations.postByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
