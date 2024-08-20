import api from "@kakasoo/github-sdk";
import { thread } from "@kakasoo/github-sdk/lib/structures/thread";
import typia from "typia";

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
