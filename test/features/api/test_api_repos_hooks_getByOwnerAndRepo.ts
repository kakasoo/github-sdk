import api from "@kakasoo/github-sdk";
import { hook } from "@kakasoo/github-sdk/lib/structures/hook";
import typia from "typia";

export async function test_api_repos_hooks_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: hook[] = await api.functional.repos.hooks.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
