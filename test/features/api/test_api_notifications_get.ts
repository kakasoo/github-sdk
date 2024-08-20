import api from "@kakasoo/github-sdk";
import { IApiNotifications } from "@kakasoo/github-sdk/lib/structures/IApiNotifications";
import { thread } from "@kakasoo/github-sdk/lib/structures/thread";
import typia from "typia";

export async function test_api_notifications_get(connection: api.IConnection) {
  const output: thread[] = await api.functional.notifications.get(
    connection,
    typia.random<IApiNotifications.GetQuery>(),
  );
  typia.assert(output);
}
