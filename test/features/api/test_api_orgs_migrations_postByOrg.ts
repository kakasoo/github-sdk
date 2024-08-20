import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { migration } from "@ORGANIZATION/PROJECT-api/lib/structures/migration";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
