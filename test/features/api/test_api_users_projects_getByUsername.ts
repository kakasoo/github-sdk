import api from "@kakasoo/github-sdk";
import { IApiUsersProjects } from "@kakasoo/github-sdk/lib/structures/IApiUsersProjects";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

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
