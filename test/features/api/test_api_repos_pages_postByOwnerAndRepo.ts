import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { page } from "@kakasoo/github-sdk/lib/structures/page";
import typia from "typia";

export async function test_api_repos_pages_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page = await api.functional.repos.pages.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
