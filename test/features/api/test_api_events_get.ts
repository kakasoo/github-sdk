import api from "@kakasoo/github-sdk";
import { event } from "@kakasoo/github-sdk/lib/structures/event";
import typia from "typia";

export async function test_api_events_get(connection: api.IConnection) {
  const output: event[] = await api.functional.events.get(connection);
  typia.assert(output);
}
