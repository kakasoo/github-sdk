import api from "@kakasoo/github-sdk";
import { thread_minus_subscription } from "@kakasoo/github-sdk/lib/structures/thread_minus_subscription";
import typia from "typia";

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
