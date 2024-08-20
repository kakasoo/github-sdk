import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_alert";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_code_scanning_alerts_patchByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_alert =
    await api.functional.repos.code_scanning.alerts.patchByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
