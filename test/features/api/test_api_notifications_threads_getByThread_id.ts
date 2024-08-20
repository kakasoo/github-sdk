import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { thread } from "@ORGANIZATION/PROJECT-api/lib/structures/thread";

export async function test_api_notifications_threads_getByThread_id(
  connection: api.IConnection,
) {
  const output: thread =
    await api.functional.notifications.threads.getByThread_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
