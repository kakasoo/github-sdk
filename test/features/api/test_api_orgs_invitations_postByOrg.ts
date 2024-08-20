import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { organization_minus_invitation } from "@kakasoo/github-sdk/lib/structures/organization_minus_invitation";
import typia from "typia";

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
