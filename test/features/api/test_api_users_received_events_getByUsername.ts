import api from "@kakasoo/github-sdk";
import { event } from "@kakasoo/github-sdk/lib/structures/event";
import typia from "typia";

export async function test_api_users_received_events_getByUsername(
  connection: api.IConnection,
) {
  const output: event[] =
    await api.functional.users.received_events.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
