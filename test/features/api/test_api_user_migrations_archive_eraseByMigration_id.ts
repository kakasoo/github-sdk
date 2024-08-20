import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_migrations_archive_eraseByMigration_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.migrations.archive.eraseByMigration_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
