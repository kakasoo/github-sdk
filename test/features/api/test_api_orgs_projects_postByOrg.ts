import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_projects_postByOrg(
  connection: api.IConnection,
) {
  const output: project = await api.functional.orgs.projects.postByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
