import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_analysis } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_analysis";
import { IApiReposCodeScanningAnalyses } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodeScanningAnalyses";

export async function test_api_repos_code_scanning_analyses_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_analysis[] =
    await api.functional.repos.code_scanning.analyses.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodeScanningAnalyses.GetQuery>(),
    );
  typia.assert(output);
}
