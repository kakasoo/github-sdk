import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_organization_roles_users_eraseByOrgAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.organization_roles.users.eraseByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
