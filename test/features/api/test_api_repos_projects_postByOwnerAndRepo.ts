import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_projects_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: project =
    await api.functional.repos.projects.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
