import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_simple";

export async function test_api_users_orgs_getByUsername(
  connection: api.IConnection,
) {
  const output: organization_minus_simple[] =
    await api.functional.users.orgs.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
