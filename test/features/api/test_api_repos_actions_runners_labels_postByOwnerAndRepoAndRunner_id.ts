import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_actions_runners_labels_postByOwnerAndRepoAndRunner_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runners.labels.postByOwnerAndRepoAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
