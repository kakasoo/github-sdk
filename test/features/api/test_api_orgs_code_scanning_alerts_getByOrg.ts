import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_organization_minus_alert_minus_items } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_organization_minus_alert_minus_items";
import { IApiOrgsCodeScanningAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsCodeScanningAlerts";

export async function test_api_orgs_code_scanning_alerts_getByOrg(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_organization_minus_alert_minus_items[] =
    await api.functional.orgs.code_scanning.alerts.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsCodeScanningAlerts.GetQuery>(),
    );
  typia.assert(output);
}
