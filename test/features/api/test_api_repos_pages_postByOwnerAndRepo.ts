import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { page } from "@ORGANIZATION/PROJECT-api/lib/structures/page";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_pages_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page = await api.functional.repos.pages.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
