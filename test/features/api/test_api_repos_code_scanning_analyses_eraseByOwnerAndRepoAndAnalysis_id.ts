import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { code_minus_scanning_minus_analysis_minus_deletion } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_analysis_minus_deletion";
import { IApiReposCodeScanningAnalyses } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodeScanningAnalyses";

export async function test_api_repos_code_scanning_analyses_eraseByOwnerAndRepoAndAnalysis_id(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_analysis_minus_deletion =
    await api.functional.repos.code_scanning.analyses.eraseByOwnerAndRepoAndAnalysis_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
      typia.random<IApiReposCodeScanningAnalyses.DeleteQuery>(),
    );
  typia.assert(output);
}
