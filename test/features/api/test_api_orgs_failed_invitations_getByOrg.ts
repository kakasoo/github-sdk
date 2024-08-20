import api from "@kakasoo/github-sdk";
import { organization_minus_invitation } from "@kakasoo/github-sdk/lib/structures/organization_minus_invitation";
import typia from "typia";

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
