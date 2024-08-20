import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_alert_minus_instance } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_alert_minus_instance";

export async function test_api_repos_code_scanning_alerts_instances_getByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_alert_minus_instance[] =
    await api.functional.repos.code_scanning.alerts.instances.getByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
