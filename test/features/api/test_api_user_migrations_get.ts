import api from "@kakasoo/github-sdk";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

export async function test_api_user_migrations_get(
  connection: api.IConnection,
) {
  const output: migration[] =
    await api.functional.user.migrations.get(connection);
  typia.assert(output);
}
