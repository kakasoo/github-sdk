import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { release } from "@kakasoo/github-sdk/lib/structures/release";
import typia from "typia";

export async function test_api_repos_releases_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: release =
    await api.functional.repos.releases.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
