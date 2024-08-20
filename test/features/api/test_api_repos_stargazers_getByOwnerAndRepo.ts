import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { stargazer } from "@ORGANIZATION/PROJECT-api/lib/structures/stargazer";

export async function test_api_repos_stargazers_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] | stargazer[] =
    await api.functional.repos.stargazers.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
