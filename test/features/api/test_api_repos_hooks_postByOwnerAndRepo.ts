import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { hook } from "@kakasoo/github-sdk/lib/structures/hook";
import typia from "typia";

export async function test_api_repos_hooks_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: hook = await api.functional.repos.hooks.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
