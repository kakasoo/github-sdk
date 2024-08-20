import api from "@kakasoo/github-sdk";
import { page } from "@kakasoo/github-sdk/lib/structures/page";
import typia from "typia";

export async function test_api_repos_pages_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page = await api.functional.repos.pages.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
