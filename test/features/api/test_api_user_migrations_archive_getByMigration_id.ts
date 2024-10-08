import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_migrations_archive_getByMigration_id(
  connection: api.IConnection,
) {
  const output = await api.functional.user.migrations.archive.getByMigration_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
