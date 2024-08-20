import api from "@kakasoo/github-sdk";
import { status } from "@kakasoo/github-sdk/lib/structures/status";
import typia from "typia";

export async function test_api_repos_commits_statuses_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: status[] =
    await api.functional.repos.commits.statuses.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
