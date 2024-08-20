import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { thread_minus_subscription } from "@kakasoo/github-sdk/lib/structures/thread_minus_subscription";
import typia from "typia";

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
