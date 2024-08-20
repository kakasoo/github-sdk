import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_invitation";

export async function test_api_repos_invitations_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_invitation[] =
    await api.functional.repos.invitations.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
