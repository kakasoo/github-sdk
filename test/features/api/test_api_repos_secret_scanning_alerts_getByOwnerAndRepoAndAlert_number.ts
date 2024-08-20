import api from "@kakasoo/github-sdk";
import { secret_minus_scanning_minus_alert } from "@kakasoo/github-sdk/lib/structures/secret_minus_scanning_minus_alert";
import typia from "typia";

export async function test_api_repos_secret_scanning_alerts_getByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_alert =
    await api.functional.repos.secret_scanning.alerts.getByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
