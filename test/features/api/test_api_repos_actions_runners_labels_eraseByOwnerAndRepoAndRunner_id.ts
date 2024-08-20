import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_actions_runners_labels_eraseByOwnerAndRepoAndRunner_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runners.labels.eraseByOwnerAndRepoAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
