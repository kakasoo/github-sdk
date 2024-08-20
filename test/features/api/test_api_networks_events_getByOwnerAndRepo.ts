import api from "@kakasoo/github-sdk";
import { event } from "@kakasoo/github-sdk/lib/structures/event";
import typia from "typia";

export async function test_api_networks_events_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: event[] =
    await api.functional.networks.events.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
