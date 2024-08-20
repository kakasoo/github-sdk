import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { runner } from "@ORGANIZATION/PROJECT-api/lib/structures/runner";

export async function test_api_orgs_actions_runners_getByOrgAndRunner_id(
  connection: api.IConnection,
) {
  const output: runner =
    await api.functional.orgs.actions.runners.getByOrgAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
