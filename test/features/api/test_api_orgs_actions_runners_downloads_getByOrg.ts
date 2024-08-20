import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { runner_minus_application } from "@ORGANIZATION/PROJECT-api/lib/structures/runner_minus_application";

export async function test_api_orgs_actions_runners_downloads_getByOrg(
  connection: api.IConnection,
) {
  const output: runner_minus_application[] =
    await api.functional.orgs.actions.runners.downloads.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
