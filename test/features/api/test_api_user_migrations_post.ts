import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

export async function test_api_user_migrations_post(
  connection: api.IConnection,
) {
  const output: migration = await api.functional.user.migrations.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
