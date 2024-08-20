import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";

export async function test_api_orgs_migrations_repositories_getByOrgAndMigration_id(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.migrations.repositories.getByOrgAndMigration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
