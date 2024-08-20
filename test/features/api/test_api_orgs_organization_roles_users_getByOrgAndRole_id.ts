import api from "@kakasoo/github-sdk";
import { user_minus_role_minus_assignment } from "@kakasoo/github-sdk/lib/structures/user_minus_role_minus_assignment";
import typia from "typia";

export async function test_api_orgs_organization_roles_users_getByOrgAndRole_id(
  connection: api.IConnection,
) {
  const output: user_minus_role_minus_assignment[] =
    await api.functional.orgs.organization_roles.users.getByOrgAndRole_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
