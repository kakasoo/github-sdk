import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_notifications_threads_eraseByThread_id(
  connection: api.IConnection,
) {
  const output = await api.functional.notifications.threads.eraseByThread_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
