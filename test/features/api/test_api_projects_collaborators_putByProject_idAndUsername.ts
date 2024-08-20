import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_projects_collaborators_putByProject_idAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.projects.collaborators.putByProject_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
