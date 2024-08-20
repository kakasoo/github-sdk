import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_labels_patchByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output: label =
    await api.functional.repos.labels.patchByOwnerAndRepoAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
