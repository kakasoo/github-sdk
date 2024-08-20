import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_subscription } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_subscription";

export async function test_api_repos_subscription_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_subscription =
    await api.functional.repos.subscription.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
