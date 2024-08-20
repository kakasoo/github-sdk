import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_users_events_public_getByUsername(
  connection: api.IConnection,
) {
  const output: event[] =
    await api.functional.users.events.public.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
