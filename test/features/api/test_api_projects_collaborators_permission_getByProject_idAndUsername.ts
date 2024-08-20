import api from "@kakasoo/github-sdk";
import { project_minus_collaborator_minus_permission } from "@kakasoo/github-sdk/lib/structures/project_minus_collaborator_minus_permission";
import typia from "typia";

export async function test_api_projects_collaborators_permission_getByProject_idAndUsername(
  connection: api.IConnection,
) {
  const output: project_minus_collaborator_minus_permission =
    await api.functional.projects.collaborators.permission.getByProject_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
