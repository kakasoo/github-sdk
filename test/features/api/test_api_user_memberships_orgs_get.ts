import api from "@kakasoo/github-sdk";
import { IApiUserMembershipsOrgs } from "@kakasoo/github-sdk/lib/structures/IApiUserMembershipsOrgs";
import { org_minus_membership } from "@kakasoo/github-sdk/lib/structures/org_minus_membership";
import typia from "typia";

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
