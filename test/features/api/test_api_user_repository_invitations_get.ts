import api from "@kakasoo/github-sdk";
import { repository_minus_invitation } from "@kakasoo/github-sdk/lib/structures/repository_minus_invitation";
import typia from "typia";

export async function test_api_user_repository_invitations_get(
  connection: api.IConnection,
) {
  const output: repository_minus_invitation[] =
    await api.functional.user.repository_invitations.get(connection);
  typia.assert(output);
}
