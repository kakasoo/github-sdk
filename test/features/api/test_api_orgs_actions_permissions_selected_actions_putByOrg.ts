import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { selected_minus_actions } from "@ORGANIZATION/PROJECT-api/lib/structures/selected_minus_actions";

export async function test_api_orgs_actions_permissions_selected_actions_putByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.permissions.selected_actions.putByOrg(
      connection,
      typia.random<string>(),
      typia.random<selected_minus_actions>(),
    );
  typia.assert(output);
}
