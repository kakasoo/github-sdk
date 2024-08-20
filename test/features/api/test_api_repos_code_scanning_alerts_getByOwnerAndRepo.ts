import api from "@kakasoo/github-sdk";
import { IApiReposCodeScanningAlerts } from "@kakasoo/github-sdk/lib/structures/IApiReposCodeScanningAlerts";
import { code_minus_scanning_minus_alert_minus_items } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_alert_minus_items";
import typia from "typia";

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
