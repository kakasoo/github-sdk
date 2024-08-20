import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { collaborator } from "@ORGANIZATION/PROJECT-api/lib/structures/collaborator";
import { IApiReposCollaborators } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCollaborators";

export async function test_api_repos_collaborators_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: collaborator[] =
    await api.functional.repos.collaborators.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCollaborators.GetQuery>(),
    );
  typia.assert(output);
}
