import api from "@kakasoo/github-sdk";
import { selected_minus_actions } from "@kakasoo/github-sdk/lib/structures/selected_minus_actions";
import typia from "typia";

export async function test_api_orgs_actions_permissions_selected_actions_getByOrg(
  connection: api.IConnection,
) {
  const output: selected_minus_actions =
    await api.functional.orgs.actions.permissions.selected_actions.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
