import api from "@kakasoo/github-sdk";
import { IApiReposCodeScanningAnalyses } from "@kakasoo/github-sdk/lib/structures/IApiReposCodeScanningAnalyses";
import { code_minus_scanning_minus_analysis_minus_deletion } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_analysis_minus_deletion";
import typia, { tags } from "typia";

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
