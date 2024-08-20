import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { IApiUsersProjects } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUsersProjects";

export async function test_api_users_projects_getByUsername(
  connection: api.IConnection,
) {
  const output: project[] = await api.functional.users.projects.getByUsername(
    connection,
    typia.random<string>(),
    typia.random<IApiUsersProjects.GetQuery>(),
  );
  typia.assert(output);
}
