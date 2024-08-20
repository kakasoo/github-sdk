import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { thread_minus_subscription } from "@ORGANIZATION/PROJECT-api/lib/structures/thread_minus_subscription";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_notifications_threads_subscription_putByThread_id(
  connection: api.IConnection,
) {
  const output: thread_minus_subscription =
    await api.functional.notifications.threads.subscription.putByThread_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
