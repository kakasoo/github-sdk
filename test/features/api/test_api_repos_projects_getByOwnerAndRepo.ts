import api from "@kakasoo/github-sdk";
import { IApiReposProjects } from "@kakasoo/github-sdk/lib/structures/IApiReposProjects";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

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
