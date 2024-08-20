import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { event } from "@ORGANIZATION/PROJECT-api/lib/structures/event";

export async function test_api_repos_events_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: event[] = await api.functional.repos.events.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
