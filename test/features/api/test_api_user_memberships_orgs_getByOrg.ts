import api from "@kakasoo/github-sdk";
import { org_minus_membership } from "@kakasoo/github-sdk/lib/structures/org_minus_membership";
import typia from "typia";

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
