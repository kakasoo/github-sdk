import api from "@kakasoo/github-sdk";
import { IApiOrgsProjects } from "@kakasoo/github-sdk/lib/structures/IApiOrgsProjects";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

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
