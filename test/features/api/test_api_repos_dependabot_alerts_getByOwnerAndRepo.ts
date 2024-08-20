import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependabot_minus_alert } from "@ORGANIZATION/PROJECT-api/lib/structures/dependabot_minus_alert";
import { IApiReposDependabotAlerts } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposDependabotAlerts";

export async function test_api_repos_dependabot_alerts_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: dependabot_minus_alert[] =
    await api.functional.repos.dependabot.alerts.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposDependabotAlerts.GetQuery>(),
    );
  typia.assert(output);
}
