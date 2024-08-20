import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_notifications_put(connection: api.IConnection) {
  const output = await api.functional.notifications.put(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
