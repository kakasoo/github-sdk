import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { pull_minus_request } from "@kakasoo/github-sdk/lib/structures/pull_minus_request";
import typia from "typia";

export async function test_api_repos_pulls_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pull_minus_request =
    await api.functional.repos.pulls.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
