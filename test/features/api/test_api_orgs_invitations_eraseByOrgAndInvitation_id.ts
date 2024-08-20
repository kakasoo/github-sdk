import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_invitations_eraseByOrgAndInvitation_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.invitations.eraseByOrgAndInvitation_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
