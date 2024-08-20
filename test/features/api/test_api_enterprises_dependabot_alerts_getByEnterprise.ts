import api from "@kakasoo/github-sdk";
import { dependabot_minus_alert_minus_with_minus_repository } from "@kakasoo/github-sdk/lib/structures/dependabot_minus_alert_minus_with_minus_repository";
import typia from "typia";

export async function test_api_enterprises_dependabot_alerts_getByEnterprise(
  connection: api.IConnection,
) {
  const output: dependabot_minus_alert_minus_with_minus_repository[] =
    await api.functional.enterprises.dependabot.alerts.getByEnterprise(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
