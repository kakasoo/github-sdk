import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_repository_invitations_eraseByInvitation_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.repository_invitations.eraseByInvitation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
