import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

export async function test_api_repos_pulls_codespaces_postByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.repos.pulls.codespaces.postByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
