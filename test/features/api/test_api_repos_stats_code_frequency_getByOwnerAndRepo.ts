import api from "@kakasoo/github-sdk";
import { code_minus_frequency_minus_stat } from "@kakasoo/github-sdk/lib/structures/code_minus_frequency_minus_stat";
import typia from "typia";

export async function test_api_repos_stats_code_frequency_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_frequency_minus_stat[] =
    await api.functional.repos.stats.code_frequency.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
