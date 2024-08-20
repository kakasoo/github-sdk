import api from "@kakasoo/github-sdk";
import { release_minus_asset } from "@kakasoo/github-sdk/lib/structures/release_minus_asset";
import typia from "typia";

export async function test_api_repos_releases_assets_getByOwnerAndRepoAndRelease_id(
  connection: api.IConnection,
) {
  const output: release_minus_asset[] =
    await api.functional.repos.releases.assets.getByOwnerAndRepoAndRelease_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
