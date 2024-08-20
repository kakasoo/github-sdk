import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";

export async function test_api_user_migrations_get(
  connection: api.IConnection,
) {
  const output: migration[] =
    await api.functional.user.migrations.get(connection);
  typia.assert(output);
}
