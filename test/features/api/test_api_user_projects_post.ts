import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_projects_post(connection: api.IConnection) {
  const output: project = await api.functional.user.projects.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
