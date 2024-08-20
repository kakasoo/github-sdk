import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { thread } from "@ORGANIZATION/PROJECT-api/lib/structures/thread";

export async function test_api_repos_notifications_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: thread[] =
    await api.functional.repos.notifications.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
