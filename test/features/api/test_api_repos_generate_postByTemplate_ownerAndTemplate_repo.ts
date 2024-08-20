import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/full_minus_repository";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_generate_postByTemplate_ownerAndTemplate_repo(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.repos.generate.postByTemplate_ownerAndTemplate_repo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
