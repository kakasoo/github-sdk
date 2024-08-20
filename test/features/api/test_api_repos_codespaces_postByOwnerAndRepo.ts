import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

export async function test_api_repos_codespaces_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.repos.codespaces.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
