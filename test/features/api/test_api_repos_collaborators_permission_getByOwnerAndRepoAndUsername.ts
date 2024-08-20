import api from "@kakasoo/github-sdk";
import { repository_minus_collaborator_minus_permission } from "@kakasoo/github-sdk/lib/structures/repository_minus_collaborator_minus_permission";
import typia from "typia";

export async function test_api_repos_collaborators_permission_getByOwnerAndRepoAndUsername(
  connection: api.IConnection,
) {
  const output: repository_minus_collaborator_minus_permission =
    await api.functional.repos.collaborators.permission.getByOwnerAndRepoAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
