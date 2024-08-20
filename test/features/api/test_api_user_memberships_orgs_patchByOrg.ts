import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { org_minus_membership } from "@kakasoo/github-sdk/lib/structures/org_minus_membership";
import typia from "typia";

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
