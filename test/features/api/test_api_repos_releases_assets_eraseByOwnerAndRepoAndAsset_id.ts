import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_releases_assets_eraseByOwnerAndRepoAndAsset_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.releases.assets.eraseByOwnerAndRepoAndAsset_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
