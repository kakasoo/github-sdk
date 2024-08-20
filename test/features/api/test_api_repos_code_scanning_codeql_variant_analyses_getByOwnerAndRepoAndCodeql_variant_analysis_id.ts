import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_variant_minus_analysis } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_variant_minus_analysis";
import typia, { tags } from "typia";

export async function test_api_repos_code_scanning_codeql_variant_analyses_getByOwnerAndRepoAndCodeql_variant_analysis_id(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_variant_minus_analysis =
    await api.functional.repos.code_scanning.codeql.variant_analyses.getByOwnerAndRepoAndCodeql_variant_analysis_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
