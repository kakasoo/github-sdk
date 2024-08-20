import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";

export async function test_api_user_migrations_repositories_getByMigration_id(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.user.migrations.repositories.getByMigration_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
