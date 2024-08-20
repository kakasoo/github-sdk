import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";

export async function test_api_user_docker_conflicts_get(
  connection: api.IConnection,
) {
  const output: package[] =
    await api.functional.user.docker.conflicts.get(connection);
  typia.assert(output);
}
