import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deploy_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/deploy_minus_key";

export async function test_api_repos_keys_getByOwnerAndRepoAndKey_id(
  connection: api.IConnection,
) {
  const output: deploy_minus_key =
    await api.functional.repos.keys.getByOwnerAndRepoAndKey_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
