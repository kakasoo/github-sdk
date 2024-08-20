import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { tag_minus_protection } from "@ORGANIZATION/PROJECT-api/lib/structures/tag_minus_protection";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_tags_protection_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag_minus_protection =
    await api.functional.repos.tags.protection.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
