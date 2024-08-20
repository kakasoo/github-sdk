import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { short_minus_blob } from "@kakasoo/github-sdk/lib/structures/short_minus_blob";
import typia from "typia";

export async function test_api_repos_git_blobs_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: short_minus_blob =
    await api.functional.repos.git.blobs.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
