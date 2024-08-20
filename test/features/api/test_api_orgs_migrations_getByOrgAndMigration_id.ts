import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";
import { IApiOrgsMigrations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsMigrations";

export async function test_api_orgs_migrations_getByOrgAndMigration_id(
  connection: api.IConnection,
) {
  const output: migration =
    await api.functional.orgs.migrations.getByOrgAndMigration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsMigrations.GetQuery>(),
    );
  typia.assert(output);
}
