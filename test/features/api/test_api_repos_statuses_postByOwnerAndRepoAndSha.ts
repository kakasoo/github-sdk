import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { status } from "@kakasoo/github-sdk/lib/structures/status";
import typia from "typia";

export async function test_api_repos_statuses_postByOwnerAndRepoAndSha(
  connection: api.IConnection,
) {
  const output: status =
    await api.functional.repos.statuses.postByOwnerAndRepoAndSha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
