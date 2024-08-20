import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";

export async function test_api_orgs_docker_conflicts_getByOrg(
  connection: api.IConnection,
) {
  const output: package[] = await api.functional.orgs.docker.conflicts.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
