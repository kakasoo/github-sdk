import api from "@kakasoo/github-sdk";
import { IApiReposCodeScanningAnalyses } from "@kakasoo/github-sdk/lib/structures/IApiReposCodeScanningAnalyses";
import { code_minus_scanning_minus_analysis } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_analysis";
import typia from "typia";

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
