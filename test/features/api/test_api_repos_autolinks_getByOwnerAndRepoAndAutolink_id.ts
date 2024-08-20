import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { autolink } from "@ORGANIZATION/PROJECT-api/lib/structures/autolink";

export async function test_api_repos_autolinks_getByOwnerAndRepoAndAutolink_id(
  connection: api.IConnection,
) {
  const output: autolink =
    await api.functional.repos.autolinks.getByOwnerAndRepoAndAutolink_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
