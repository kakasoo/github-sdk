import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { page } from "@ORGANIZATION/PROJECT-api/lib/structures/page";

export async function test_api_repos_pages_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page = await api.functional.repos.pages.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}