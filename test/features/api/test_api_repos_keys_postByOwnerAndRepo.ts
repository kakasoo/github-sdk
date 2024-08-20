import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { deploy_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/deploy_minus_key";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_keys_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: deploy_minus_key =
    await api.functional.repos.keys.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
