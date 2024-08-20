import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { project } from "@ORGANIZATION/PROJECT-api/lib/structures/project";
import { IApiOrgsProjects } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsProjects";

export async function test_api_orgs_projects_getByOrg(
  connection: api.IConnection,
) {
  const output: project[] = await api.functional.orgs.projects.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsProjects.GetQuery>(),
  );
  typia.assert(output);
}
