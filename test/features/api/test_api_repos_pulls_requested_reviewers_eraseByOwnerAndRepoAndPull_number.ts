import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { pull_minus_request_minus_simple } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_simple";
import typia from "typia";

export async function test_api_repos_pulls_requested_reviewers_eraseByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple =
    await api.functional.repos.pulls.requested_reviewers.eraseByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
