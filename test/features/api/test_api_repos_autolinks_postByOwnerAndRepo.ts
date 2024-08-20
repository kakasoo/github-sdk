import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { autolink } from "@ORGANIZATION/PROJECT-api/lib/structures/autolink";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_autolinks_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: autolink =
    await api.functional.repos.autolinks.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
