import api from "@kakasoo/github-sdk";
import { runner_minus_application } from "@kakasoo/github-sdk/lib/structures/runner_minus_application";
import typia from "typia";

export async function test_api_repos_actions_runners_downloads_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: runner_minus_application[] =
    await api.functional.repos.actions.runners.downloads.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
