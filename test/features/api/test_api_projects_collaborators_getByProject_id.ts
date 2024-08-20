import api from "@kakasoo/github-sdk";
import { IApiProjectsCollaborators } from "@kakasoo/github-sdk/lib/structures/IApiProjectsCollaborators";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

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
