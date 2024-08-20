import api from "@kakasoo/github-sdk";
import { IApiReposCollaborators } from "@kakasoo/github-sdk/lib/structures/IApiReposCollaborators";
import { collaborator } from "@kakasoo/github-sdk/lib/structures/collaborator";
import typia from "typia";

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
