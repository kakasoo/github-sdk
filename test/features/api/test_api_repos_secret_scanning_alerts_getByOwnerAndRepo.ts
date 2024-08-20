import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { secret_minus_scanning_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/secret_minus_scanning_minus_alert";

export async function test_api_repos_secret_scanning_alerts_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_alert[] =
    await api.functional.repos.secret_scanning.alerts.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
