import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_invitation";

export async function test_api_user_repository_invitations_get(
  connection: api.IConnection,
) {
  const output: repository_minus_invitation[] =
    await api.functional.user.repository_invitations.get(connection);
  typia.assert(output);
}
