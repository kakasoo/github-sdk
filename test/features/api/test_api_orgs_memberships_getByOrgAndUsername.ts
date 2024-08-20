import api from "@kakasoo/github-sdk";
import { org_minus_membership } from "@kakasoo/github-sdk/lib/structures/org_minus_membership";
import typia from "typia";

export async function test_api_orgs_memberships_getByOrgAndUsername(
  connection: api.IConnection,
) {
  const output: org_minus_membership =
    await api.functional.orgs.memberships.getByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
