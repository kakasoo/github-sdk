import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_repository_invitations_patchByInvitation_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.repository_invitations.patchByInvitation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
