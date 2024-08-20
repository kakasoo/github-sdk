import api from "@kakasoo/github-sdk";
import { event } from "@kakasoo/github-sdk/lib/structures/event";
import typia from "typia";

export async function test_api_orgs_events_getByOrg(
  connection: api.IConnection,
) {
  const output: event[] = await api.functional.orgs.events.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
