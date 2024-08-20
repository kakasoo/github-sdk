import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { thread } from "@ORGANIZATION/PROJECT-api/lib/structures/thread";
import { IApiNotifications } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiNotifications";

export async function test_api_notifications_get(connection: api.IConnection) {
  const output: thread[] = await api.functional.notifications.get(
    connection,
    typia.random<IApiNotifications.GetQuery>(),
  );
  typia.assert(output);
}
