import api from "@kakasoo/github-sdk";
import { IApiReposDependabotAlerts } from "@kakasoo/github-sdk/lib/structures/IApiReposDependabotAlerts";
import { dependabot_minus_alert } from "@kakasoo/github-sdk/lib/structures/dependabot_minus_alert";
import typia from "typia";

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
