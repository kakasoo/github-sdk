import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation } from "@ORGANIZATION/PROJECT-api/lib/structures/installation";

export async function test_api_users_installation_getByUsername(
  connection: api.IConnection,
) {
  const output: installation =
    await api.functional.users.installation.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
