import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/full_minus_repository";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_repos_post(connection: api.IConnection) {
  const output: full_minus_repository = await api.functional.user.repos.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
