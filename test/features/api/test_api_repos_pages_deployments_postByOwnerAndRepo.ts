import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { page_minus_deployment } from "@ORGANIZATION/PROJECT-api/lib/structures/page_minus_deployment";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_pages_deployments_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page_minus_deployment =
    await api.functional.repos.pages.deployments.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
