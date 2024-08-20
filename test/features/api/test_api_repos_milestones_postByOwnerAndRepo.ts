import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { milestone } from "@ORGANIZATION/PROJECT-api/lib/structures/milestone";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_milestones_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: milestone =
    await api.functional.repos.milestones.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
