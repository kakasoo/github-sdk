import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_users_events_orgs_getByUsernameAndOrg(
  connection: api.IConnection,
) {
  const output: event[] =
    await api.functional.users.events.orgs.getByUsernameAndOrg(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
