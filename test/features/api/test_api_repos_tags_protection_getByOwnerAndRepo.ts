import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { tag_minus_protection } from "@ORGANIZATION/PROJECT-api/lib/structures/tag_minus_protection";

export async function test_api_repos_tags_protection_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag_minus_protection[] =
    await api.functional.repos.tags.protection.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
