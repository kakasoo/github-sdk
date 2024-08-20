import api from "@kakasoo/github-sdk";
import { autolink } from "@kakasoo/github-sdk/lib/structures/autolink";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_repos_autolinks_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: autolink =
    await api.functional.repos.autolinks.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
