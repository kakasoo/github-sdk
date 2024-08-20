import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";
import { IApiUserMigrations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserMigrations";

export async function test_api_user_migrations_getByMigration_id(
  connection: api.IConnection,
) {
  const output: migration =
    await api.functional.user.migrations.getByMigration_id(
      connection,
      typia.random<string>(),
      typia.random<IApiUserMigrations.GetQuery>(),
    );
  typia.assert(output);
}
