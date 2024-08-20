import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { release_minus_asset } from "@ORGANIZATION/PROJECT-api/lib/structures/release_minus_asset";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

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
