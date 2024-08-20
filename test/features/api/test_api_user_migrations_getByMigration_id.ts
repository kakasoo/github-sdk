import api from "@kakasoo/github-sdk";
import { IApiUserMigrations } from "@kakasoo/github-sdk/lib/structures/IApiUserMigrations";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

export async function test_api_user_migrations_getByMigration_id(
  connection: api.IConnection,
) {
  const output: migration =
    await api.functional.user.migrations.getByMigration_id(
      connection,
      typia.random<string>(),
      typia.random<IApiUserMigrations.GetQuery>(),
    );
  typia.assert(output);
}
