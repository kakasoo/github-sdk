import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_codespaces_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.repos.codespaces.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
