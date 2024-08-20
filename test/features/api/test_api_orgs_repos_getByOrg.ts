import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";
import { IApiOrgsRepos } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsRepos";

export async function test_api_orgs_repos_getByOrg(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.repos.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsRepos.GetQuery>(),
    );
  typia.assert(output);
}
