import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_alert_minus_instance } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_alert_minus_instance";
import typia from "typia";

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
