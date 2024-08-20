import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_migrations_repos_lock_eraseByMigration_idAndRepo_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.migrations.repos.lock.eraseByMigration_idAndRepo_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
