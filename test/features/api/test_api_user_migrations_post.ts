import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_migrations_post(
  connection: api.IConnection,
) {
  const output: migration = await api.functional.user.migrations.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
