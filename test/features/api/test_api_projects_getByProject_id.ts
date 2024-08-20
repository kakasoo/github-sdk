import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";

export async function test_api_projects_getByProject_id(
  connection: api.IConnection,
) {
  const output: project = await api.functional.projects.getByProject_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
