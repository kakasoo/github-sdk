import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { selected_minus_actions } from "@ORGANIZATION/PROJECT-api/lib/structures/selected_minus_actions";

export async function test_api_repos_actions_permissions_selected_actions_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: selected_minus_actions =
    await api.functional.repos.actions.permissions.selected_actions.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
