import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_notifications_put(connection: api.IConnection) {
  const output = await api.functional.notifications.put(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}