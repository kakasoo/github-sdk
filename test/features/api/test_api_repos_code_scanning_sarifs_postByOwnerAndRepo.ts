import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_code_scanning_sarifs_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.code_scanning.sarifs.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
