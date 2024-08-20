import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_notifications_threads_patchByThread_id(
  connection: api.IConnection,
) {
  const output = await api.functional.notifications.threads.patchByThread_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
