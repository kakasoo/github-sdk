import api from "@kakasoo/github-sdk";
import { release } from "@kakasoo/github-sdk/lib/structures/release";
import typia from "typia";

export async function test_api_repos_releases_tags_getByOwnerAndRepoAndTag(
  connection: api.IConnection,
) {
  const output: release =
    await api.functional.repos.releases.tags.getByOwnerAndRepoAndTag(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
