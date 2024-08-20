import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_secret_minus_scanning_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_secret_minus_scanning_minus_alert";

export async function test_api_orgs_secret_scanning_alerts_getByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_secret_minus_scanning_minus_alert[] =
    await api.functional.orgs.secret_scanning.alerts.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
