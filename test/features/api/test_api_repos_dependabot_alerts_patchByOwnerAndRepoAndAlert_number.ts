import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependabot_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/dependabot_minus_alert";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_dependabot_alerts_patchByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: dependabot_minus_alert =
    await api.functional.repos.dependabot.alerts.patchByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
