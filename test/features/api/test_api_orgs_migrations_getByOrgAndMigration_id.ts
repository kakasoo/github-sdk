import api from "@kakasoo/github-sdk";
import { IApiOrgsMigrations } from "@kakasoo/github-sdk/lib/structures/IApiOrgsMigrations";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

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
