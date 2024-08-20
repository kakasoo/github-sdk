import api from "@kakasoo/github-sdk";
import { blob } from "@kakasoo/github-sdk/lib/structures/blob";
import typia from "typia";

export async function test_api_repos_git_blobs_getByOwnerAndRepoAndFile_sha(
  connection: api.IConnection,
) {
  const output: blob =
    await api.functional.repos.git.blobs.getByOwnerAndRepoAndFile_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
