import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { dependabot_minus_alert } from "@kakasoo/github-sdk/lib/structures/dependabot_minus_alert";
import typia from "typia";

export async function test_api_repos_dependabot_alerts_patchByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: dependabot_minus_alert =
    await api.functional.repos.dependabot.alerts.patchByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
