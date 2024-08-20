import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_events_get(connection: api.IConnection) {
  const output: event[] = await api.functional.events.get(connection);
  typia.assert(output);
}
