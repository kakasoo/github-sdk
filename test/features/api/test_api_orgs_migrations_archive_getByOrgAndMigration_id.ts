import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_migrations_archive_getByOrgAndMigration_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.migrations.archive.getByOrgAndMigration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
