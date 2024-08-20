import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_pages_eraseByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.repos.pages.eraseByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
