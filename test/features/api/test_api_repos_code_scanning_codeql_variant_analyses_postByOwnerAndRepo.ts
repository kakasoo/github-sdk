import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_variant_minus_analysis } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_variant_minus_analysis";

export async function test_api_repos_code_scanning_codeql_variant_analyses_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_variant_minus_analysis =
    await api.functional.repos.code_scanning.codeql.variant_analyses.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<any | any | any>(),
    );
  typia.assert(output);
}
