import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_alert_minus_items } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_alert_minus_items";
import { IApiReposCodeScanningAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodeScanningAlerts";

export async function test_api_repos_code_scanning_alerts_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_alert_minus_items[] =
    await api.functional.repos.code_scanning.alerts.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodeScanningAlerts.GetQuery>(),
    );
  typia.assert(output);
}
