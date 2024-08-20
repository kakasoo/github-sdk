import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { tag } from "@ORGANIZATION/PROJECT-api/lib/structures/tag";

export async function test_api_repos_tags_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag[] = await api.functional.repos.tags.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
