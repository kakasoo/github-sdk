import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { IApiProjectsCollaborators } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiProjectsCollaborators";

export async function test_api_projects_collaborators_getByProject_id(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.projects.collaborators.getByProject_id(
      connection,
      typia.random<string>(),
      typia.random<IApiProjectsCollaborators.GetQuery>(),
    );
  typia.assert(output);
}
