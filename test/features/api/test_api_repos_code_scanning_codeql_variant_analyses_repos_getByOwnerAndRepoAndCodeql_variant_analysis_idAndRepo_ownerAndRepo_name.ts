import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_variant_minus_analysis_minus_repo_minus_task } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_variant_minus_analysis_minus_repo_minus_task";
import typia, { tags } from "typia";

export async function test_api_repos_code_scanning_codeql_variant_analyses_repos_getByOwnerAndRepoAndCodeql_variant_analysis_idAndRepo_ownerAndRepo_name(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_variant_minus_analysis_minus_repo_minus_task =
    await api.functional.repos.code_scanning.codeql.variant_analyses.repos.getByOwnerAndRepoAndCodeql_variant_analysis_idAndRepo_ownerAndRepo_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
