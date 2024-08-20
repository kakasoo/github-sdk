import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_actions_runners_labels_eraseByOwnerAndRepoAndRunner_idAndName(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runners.labels.eraseByOwnerAndRepoAndRunner_idAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
