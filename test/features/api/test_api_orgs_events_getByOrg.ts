import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_orgs_events_getByOrg(
  connection: api.IConnection,
) {
  const output: event[] = await api.functional.orgs.events.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
