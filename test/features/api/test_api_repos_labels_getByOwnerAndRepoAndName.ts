import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";

export async function test_api_repos_labels_getByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output: label =
    await api.functional.repos.labels.getByOwnerAndRepoAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}