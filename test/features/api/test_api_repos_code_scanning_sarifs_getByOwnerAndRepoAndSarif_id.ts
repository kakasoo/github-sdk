import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_sarifs_minus_status } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_sarifs_minus_status";
import typia from "typia";

export async function test_api_repos_code_scanning_sarifs_getByOwnerAndRepoAndSarif_id(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_sarifs_minus_status =
    await api.functional.repos.code_scanning.sarifs.getByOwnerAndRepoAndSarif_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
