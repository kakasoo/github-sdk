import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_subscription } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_subscription";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_subscription_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_subscription =
    await api.functional.repos.subscription.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
