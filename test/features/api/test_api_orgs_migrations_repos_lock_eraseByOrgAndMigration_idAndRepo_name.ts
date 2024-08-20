import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_migrations_repos_lock_eraseByOrgAndMigration_idAndRepo_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.migrations.repos.lock.eraseByOrgAndMigration_idAndRepo_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
