import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { pull_minus_request_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/pull_minus_request_minus_simple";
import { IApiReposPulls } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposPulls";

export async function test_api_repos_pulls_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple[] =
    await api.functional.repos.pulls.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposPulls.GetQuery>(),
    );
  typia.assert(output);
}
