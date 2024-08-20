import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { repository_minus_invitation } from "@kakasoo/github-sdk/lib/structures/repository_minus_invitation";
import typia from "typia";

export async function test_api_repos_invitations_patchByOwnerAndRepoAndInvitation_id(
  connection: api.IConnection,
) {
  const output: repository_minus_invitation =
    await api.functional.repos.invitations.patchByOwnerAndRepoAndInvitation_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
