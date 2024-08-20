import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_notifications_threads_subscription_eraseByThread_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.notifications.threads.subscription.eraseByThread_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
