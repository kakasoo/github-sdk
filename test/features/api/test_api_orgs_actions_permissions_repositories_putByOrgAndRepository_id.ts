import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_actions_permissions_repositories_putByOrgAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.permissions.repositories.putByOrgAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
