import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { migration } from "@kakasoo/github-sdk/lib/structures/migration";
import typia from "typia";

export async function test_api_orgs_migrations_postByOrg(
  connection: api.IConnection,
) {
  const output: migration = await api.functional.orgs.migrations.postByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
