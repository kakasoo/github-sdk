import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";

export async function test_api_users_docker_conflicts_getByUsername(
  connection: api.IConnection,
) {
  const output: package[] =
    await api.functional.users.docker.conflicts.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
