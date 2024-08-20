import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { code_minus_scanning_minus_analysis } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_analysis";

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
