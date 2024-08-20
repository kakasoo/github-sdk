import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_projects_patchByProject_id(
  connection: api.IConnection,
) {
  const output: project = await api.functional.projects.patchByProject_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
