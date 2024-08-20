import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { secret_minus_scanning_minus_location } from "@ORGANIZATION/PROJECT-api/lib/structures/secret_minus_scanning_minus_location";

export async function test_api_repos_secret_scanning_alerts_locations_getByOwnerAndRepoAndAlert_number(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_location[] =
    await api.functional.repos.secret_scanning.alerts.locations.getByOwnerAndRepoAndAlert_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
