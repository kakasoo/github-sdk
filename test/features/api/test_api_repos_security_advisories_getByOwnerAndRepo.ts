import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory";
import { IApiReposSecurityAdvisories } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposSecurityAdvisories";

export async function test_api_repos_security_advisories_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory[] =
    await api.functional.repos.security_advisories.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposSecurityAdvisories.GetQuery>(),
    );
  typia.assert(output);
}
