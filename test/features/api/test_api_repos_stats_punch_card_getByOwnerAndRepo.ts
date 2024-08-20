import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_frequency_minus_stat } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_frequency_minus_stat";

export async function test_api_repos_stats_punch_card_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_frequency_minus_stat[] =
    await api.functional.repos.stats.punch_card.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
