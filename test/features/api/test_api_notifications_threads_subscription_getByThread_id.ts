import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { thread_minus_subscription } from "@ORGANIZATION/PROJECT-api/lib/structures/thread_minus_subscription";

export async function test_api_notifications_threads_subscription_getByThread_id(
  connection: api.IConnection,
) {
  const output: thread_minus_subscription =
    await api.functional.notifications.threads.subscription.getByThread_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
