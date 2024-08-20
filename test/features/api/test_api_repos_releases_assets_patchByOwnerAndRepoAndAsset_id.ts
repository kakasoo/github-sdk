import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { release_minus_asset } from "@kakasoo/github-sdk/lib/structures/release_minus_asset";
import typia from "typia";

export async function test_api_repos_releases_assets_patchByOwnerAndRepoAndAsset_id(
  connection: api.IConnection,
) {
  const output: release_minus_asset =
    await api.functional.repos.releases.assets.patchByOwnerAndRepoAndAsset_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
