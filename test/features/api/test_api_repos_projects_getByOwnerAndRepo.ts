import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { IApiReposProjects } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposProjects";

export async function test_api_repos_projects_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: project[] =
    await api.functional.repos.projects.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposProjects.GetQuery>(),
    );
  typia.assert(output);
}
