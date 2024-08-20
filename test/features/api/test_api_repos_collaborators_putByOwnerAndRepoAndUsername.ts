import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_invitation } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_invitation";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_collaborators_putByOwnerAndRepoAndUsername(
  connection: api.IConnection,
) {
  const output: repository_minus_invitation =
    await api.functional.repos.collaborators.putByOwnerAndRepoAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
