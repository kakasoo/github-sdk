import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/deployment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_deployments_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: deployment =
    await api.functional.repos.deployments.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
