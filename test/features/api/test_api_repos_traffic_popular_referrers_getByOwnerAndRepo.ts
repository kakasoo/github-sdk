import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { referrer_minus_traffic } from "@ORGANIZATION/PROJECT-api/lib/structures/referrer_minus_traffic";

export async function test_api_repos_traffic_popular_referrers_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: referrer_minus_traffic[] =
    await api.functional.repos.traffic.popular.referrers.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
