import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_analysis } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_analysis";
import typia, { tags } from "typia";

export async function test_api_repos_code_scanning_analyses_getByOwnerAndRepoAndAnalysis_id(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_analysis =
    await api.functional.repos.code_scanning.analyses.getByOwnerAndRepoAndAnalysis_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
