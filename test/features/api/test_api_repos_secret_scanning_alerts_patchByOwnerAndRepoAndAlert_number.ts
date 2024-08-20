import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { secret_minus_scanning_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/secret_minus_scanning_minus_alert";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_secret_scanning_alerts_patchByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_alert =
    await api.functional.repos.secret_scanning.alerts.patchByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
