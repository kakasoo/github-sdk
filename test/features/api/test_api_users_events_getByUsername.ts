import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_users_events_getByUsername(
  connection: api.IConnection,
) {
  const output: event[] = await api.functional.users.events.getByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
