import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/full_minus_repository";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_repos_postByOrg(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.orgs.repos.postByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
