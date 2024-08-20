import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";
import { IApiOrgsMigrations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsMigrations";

export async function test_api_orgs_migrations_getByOrg(
  connection: api.IConnection,
) {
  const output: migration[] = await api.functional.orgs.migrations.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsMigrations.GetQuery>(),
  );
  typia.assert(output);
}
