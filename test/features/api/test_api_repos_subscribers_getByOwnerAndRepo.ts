import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";

export async function test_api_repos_subscribers_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.repos.subscribers.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
